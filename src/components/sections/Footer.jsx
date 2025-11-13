import { Facebook, Twitter, Linkedin, Instagram, Github, Mail } from "lucide-react"
import NavList from "@/components/data/NavList"
import SocialLinks from "@/components/data/SocialLinks"
import { Link as ScrollLink } from "react-scroll"

const socialIcons = {
    Facebook: Facebook,
    Twitter: Twitter,
    Linkedin: Linkedin,
    Instagram: Instagram,
    Github: Github,
    Mail: Mail
}

const Footer = () => {
    return (
        <section className="bg-background/50 backdrop-blur-sm border-t border-gray-600 py-15">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 px-4">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-foreground">Joel Mayol Jr.</h3>
                        <p className="text-foreground text-[16px] leading-relaxed">
                            Frontend Developer passionate about creating beautiful and functional web experiences.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
                        <nav className="flex flex-col gap-2">
                            {NavList.map((item, key) => (
                                <ScrollLink
                                    key={key}
                                    to={item.url}
                                    spy
                                    smooth
                                    duration={500}
                                    offset={-150}
                                    isDynamic={true}
                                    className="text-foreground text-[16px] hover:text-primary transition-colors cursor-pointer"
                                >
                                    {item.label}
                                </ScrollLink>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-foreground">Connect</h3>
                        <div className="flex flex-row gap-4">
                            {SocialLinks.map((link, key) => {
                                const IconComponent = socialIcons[link.icon]
                                return (
                                    <a
                                        key={key}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground hover:text-primary transition-colors"
                                        aria-label={link.label}
                                    >
                                        <IconComponent size={24} />
                                    </a>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
