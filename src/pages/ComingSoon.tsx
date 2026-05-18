import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import logoHorizontal from "@/assets/LOGO_HORIZONTALL.png";
import hero from "@/assets/hero.jpg";

const ComingSoon = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center px-6">
      {/* Hero Background */}
      <img
        src={hero}
        alt="Estrutura de concreto armado em construção pela Percettore"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-lg w-full">
        {/* Logo */}
        <div className="text-center mb-12">
          <img
            src={logoHorizontal}
            alt="Percettore"
            className="h-16 mx-auto mb-8"
          />
          <p className="text-white text-lg leading-relaxed max-w-md mx-auto">
            Estamos construindo o novo site.<br />
            Enquanto isso, entre em contato:
          </p>
        </div>

        {/* Contato - Layout em Lista Clara */}
        <div className="space-y-4 mb-10">
          <a 
            href="mailto:contato@percettore.com.br"
            className="flex items-center gap-4 p-4 bg-black/80 backdrop-blur-sm rounded-lg hover:bg-black/90 transition-colors group"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-black" />
            </div>
            <div className="text-left">
              <div className="font-medium text-white">E-mail</div>
              <div className="text-gray-400 text-sm">contato@percettore.com.br</div>
            </div>
          </a>

          <a 
            href="https://wa.me/551124470892"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-black/80 backdrop-blur-sm rounded-lg hover:bg-black/90 transition-colors group"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-black" />
            </div>
            <div className="text-left">
              <div className="font-medium text-white">Telefone</div>
              <div className="text-gray-400 text-sm">11 24470892</div>
            </div>
          </a>
        </div>

        {/* Redes Sociais - Mais Visíveis */}
        <div className="text-center mb-8">
          <div className="text-gray-300 text-sm mb-4">Siga nas redes sociais</div>
          <div className="flex items-center justify-center gap-6">
            <div
              className="w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </div>
            
            <a
              href="https://www.instagram.com/percettoreincorporacao"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-black/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/90 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm">
          © 2026 Percettore. Todos os direitos reservados.
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
