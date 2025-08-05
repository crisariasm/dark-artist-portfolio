import { Card, CardContent } from "@/components/ui/card"
import { Eye, Target, Heart, Lightbulb } from "lucide-react"

const valores = [
  { icon: Heart, titulo: "AUTENTICIDAD", descripcion: "Cada obra nace de mi experiencia personal con el daltonismo." },
  {
    icon: Lightbulb,
    titulo: "INNOVACIÓN",
    descripcion: "Fusión del dramatismo y NO! Art con técnicas contemporáneas.",
  },
  { icon: Eye, titulo: "COMPROMISO SOCIAL", descripcion: "El arte como herramienta de crítica social y reflexión." },
  { icon: Target, titulo: "DIVERSIDAD PERCEPTUAL", descripcion: "Celebrar el daltonismo como ventaja creativa única." },
]

export default function VisionPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 font-typewriter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-red">
            MISIÓN Y VISIÓN
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            La filosofía que guía mi trabajo artístico y mi compromiso con la exploración de la condición humana
          </p>
        </div>

        {/* Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <Card className="bg-black/50 border-electric-red/30 hover:border-electric-red/50 transition-all duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-electric-red mr-3 sm:mr-4" />
                <h2 className="text-2xl sm:text-3xl font-bold text-electric-red">MISIÓN</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                Generar representaciones artísticas sobre la angustia y las emociones que nos atormentan como seres
                humanos, demostrando que todos tenemos la oportunidad de encontrar felicidad a través de las palabras e
                imágenes correctas.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/50 border-electric-blue/30 hover:border-electric-blue/50 transition-all duration-300">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center mb-4 sm:mb-6">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-electric-blue mr-3 sm:mr-4" />
                <h2 className="text-2xl sm:text-3xl font-bold text-electric-blue">VISIÓN</h2>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                Consolidarme como un artista visual que trascienda las barreras convencionales del arte contemporáneo,
                utilizando mi perspectiva única del color para crear obras que generen reflexión profunda sobre la
                angustia humana y la crítica social.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Valores */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-electric-blue">
            VALORES Y PRINCIPIOS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {valores.map((valor, index) => (
              <Card
                key={index}
                className="bg-black/50 border-electric-blue/30 hover:border-electric-red/50 transition-all duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <valor.icon className="w-5 h-5 sm:w-6 sm:h-6 text-electric-red mr-2 sm:mr-3" />
                    <h3 className="text-lg sm:text-xl font-bold text-electric-blue">{valor.titulo}</h3>
                  </div>
                  <p className="text-gray-300 text-sm sm:text-base">{valor.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impacto */}
        <Card className="bg-black/50 border-electric-blue/30 max-w-4xl mx-auto">
          <CardContent className="p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-electric-red mb-6 sm:mb-8">MI COMPROMISO</h2>
            <blockquote className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed italic mb-4 sm:mb-6">
              "MI DALTONISMO NO ES UNA LIMITACIÓN, ES MI SUPERPODER CREATIVO QUE ME PERMITE VER EL MUNDO DE MANERA ÚNICA
              Y TRADUCIR ESA VISIÓN EN ARTE QUE TOCA EL ALMA HUMANA."
            </blockquote>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="p-3 sm:p-4 bg-electric-red/20 rounded-lg border border-electric-blue/30">
                <h4 className="text-electric-blue font-semibold text-sm sm:text-base">EDUCACIÓN</h4>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">Formar nuevas generaciones conscientes</p>
              </div>
              <div className="p-3 sm:p-4 bg-electric-red/20 rounded-lg border border-electric-blue/30">
                <h4 className="text-electric-blue font-semibold text-sm sm:text-base">INVESTIGACIÓN</h4>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">Contribuir al conocimiento artístico</p>
              </div>
              <div className="p-3 sm:p-4 bg-electric-red/20 rounded-lg border border-electric-blue/30">
                <h4 className="text-electric-blue font-semibold text-sm sm:text-base">TRANSFORMACIÓN</h4>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">Generar reflexión social</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
