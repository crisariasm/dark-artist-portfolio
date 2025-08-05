import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Users, MapPin, Palette } from "lucide-react"

export default function SobreMiPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 font-typewriter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-red">
            SOBRE MÍ
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Artista visual influenciado por el dramatismo y el NO! Art, explorando la crítica social.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed">
            <p className="text-base sm:text-lg lg:text-xl">
              Soy <strong className="text-electric-blue">Stiven Daniel Bermúdez Muñoz</strong>, Licenciado en Artes
              Visuales de la UTP. Mi trabajo está inspirado en el dramatismo y el movimiento NO! Art, con una
              perspectiva crítica sobre la sociedad consumista y el realismo mágico.
            </p>
            <p className="text-sm sm:text-base lg:text-lg">
              Mi daltonismo influye directamente en mi paleta de colores y en la forma única en que interpreto la
              realidad.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-6 sm:mt-8">
              <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                <MapPin className="w-3 h-3 mr-1" />
                Pereira, Risaralda
              </Badge>
              <Badge className="bg-electric-red/20 text-electric-red border-electric-red px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                <GraduationCap className="w-3 h-3 mr-1" />
                Licenciado UTP
              </Badge>
              <Badge className="bg-electric-blue/20 text-electric-blue border-electric-blue px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm">
                <Users className="w-3 h-3 mr-1" />
                Artista Visual
              </Badge>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://ik.imagekit.io/hi0ocsyfm/steven.png?updatedAt=1754368934803"
              alt="Estudio del artista"
              className="relative z-10 w-full h-auto max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-lg shadow-2xl border border-electric-blue/30"
            />
          </div>
        </div>

        {/* Filosofía */}
        <Card className="bg-black/50 border-electric-blue/30 max-w-4xl mx-auto">
          <CardContent className="p-6 sm:p-8 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 gap-2 sm:gap-4">
              <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-electric-red" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-electric-blue">FILOSOFÍA ARTÍSTICA</h2>
            </div>
            <blockquote className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed italic">
              "El arte es el espejo de la angustia humana, una forma de gritar en silencio y encontrar belleza en la
              imperfección. Mi obra refleja la complejidad de la existencia y la búsqueda de sentido."
            </blockquote>
            <p className="text-electric-red font-semibold mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg">
              - Stiven Daniel Bermúdez Muñoz
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
