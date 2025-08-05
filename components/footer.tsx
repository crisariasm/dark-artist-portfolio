import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-electric-red/30 py-8 md:py-12 font-typewriter">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold text-electric-blue mb-4">STIVEN DANIEL BERMÚDEZ MUÑOZ</h3>
            <p className="text-gray-400 text-sm md:text-base">
              Licenciado en Artes Visuales
              <br />
              Miembro del Grupo de Investigación INDICIOS: Educación y Arte
              <br />
              Pereira, Risaralda
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-electric-blue mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400 text-sm md:text-base">
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="w-4 h-4 mr-2" />
                <span>3126538045</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="w-4 h-4 mr-2" />
                <span>stiven.bermudez@utp.edu.co</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Pereira, Risaralda</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-electric-blue mb-4">Sígueme</h4>
            <div className="space-y-2">
              <a
                href="https://instagram.com/stiven.bermudez.art"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors flex items-center justify-center md:justify-start"
              >
                <Instagram className="w-4 h-4 mr-2" />
                @stiven.bermudez.art
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-electric-red/30 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Stiven Daniel Bermúdez Muñoz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
