
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "elghabouri.moh.fst@uhp.ac.ma",
      href: "mailto:elghabouri.moh.fst@uhp.ac.ma",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "0659773403",
      href: "tel:0659773403",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Settat, Maroc",
      href: "#",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://ma.linkedin.com/in/mohamed-elghabouri",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mohamed-elghabouri",
      color: "from-gray-700 to-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-tech-dark to-tech-darker">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Collaborons Ensemble</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tech-primary to-tech-purple mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Vous avez un projet en tête ? Une opportunité à discuter ? 
            N'hésitez pas à me contacter, je serais ravi d'échanger avec vous !
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informations de Contact</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 tech-card glow-effect group transition-all duration-300 hover:scale-105"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-tech-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Réseaux Sociaux</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group`}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Morocco Map Visual */}
            <div className="relative">
              <div className="w-full h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="text-4xl mb-2">🇲🇦</div>
                  <h4 className="text-white font-bold mb-1">Royaume du Maroc</h4>
                  <p className="text-tech-primary">Settat, Casablanca-Settat</p>
                  <p className="text-slate-400 text-sm mt-2">Disponible pour missions sur site ou à distance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <div className="tech-card glow-effect">
              <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-tech-primary focus:ring-tech-primary"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-tech-primary focus:ring-tech-primary"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2">
                    Sujet *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-tech-primary focus:ring-tech-primary"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-tech-primary focus:ring-tech-primary resize-none"
                    placeholder="Décrivez votre projet ou votre demande..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-tech-primary to-tech-purple hover:from-tech-purple hover:to-tech-primary text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105 glow-effect"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Envoyer le Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="tech-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à <span className="gradient-text">Collaborer</span> ?
            </h3>
            <p className="text-slate-300 mb-6">
              Que ce soit pour un stage, un projet freelance ou une opportunité d'emploi, 
              je suis toujours ouvert aux nouvelles opportunités passionnantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-gradient-to-r from-tech-primary to-tech-purple hover:from-tech-purple hover:to-tech-primary text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                <a href="mailto:elghabouri.moh.fst@uhp.ac.ma">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Direct
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-tech-primary text-tech-primary hover:bg-tech-primary hover:text-black px-8 py-3 rounded-full transition-all duration-300"
              >
                <a href="https://ma.linkedin.com/in/mohamed-elghabouri" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
