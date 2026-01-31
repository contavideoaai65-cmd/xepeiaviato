const BRAND_PLACEHOLDER = "{{MARCA_LOGO}}";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-aviator-darker border-t border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Logo placeholder */}
          <div className="text-center">
            <code className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded">
              {BRAND_PLACEHOLDER}
            </code>
          </div>

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
