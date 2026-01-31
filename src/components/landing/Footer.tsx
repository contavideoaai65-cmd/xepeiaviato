import xepeiLogo from "@/assets/xepei-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-aviator-darker border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="text-center">
            <img 
              src={xepeiLogo} 
              alt="Xepei Aviator" 
              className="w-20 h-20 rounded-full object-cover mx-auto shadow-fire"
            />
          </div>

          {/* Brand name */}
          <p className="text-foreground font-bold text-lg">Xepei Aviator</p>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs text-center">
            © {currentYear} — Todos os direitos reservados
          </p>

          {/* Legal disclaimer */}
          <p className="text-muted-foreground/60 text-[10px] text-center max-w-lg">
            Este site não tem relação com nenhuma plataforma de apostas. 
            O conteúdo apresentado é apenas para fins educacionais e de entretenimento. 
            Aposte com responsabilidade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
