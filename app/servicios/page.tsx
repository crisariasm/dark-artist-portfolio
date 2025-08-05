import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, GraduationCap, Users } from "lucide-react"

const servicios = [
  {
    icon: Palette,
    titulo: "Obras Personalizadas",
    descripcion: "Creación de obras únicas adaptadas a tu visión y espacio.",
    precio: "Desde $500.000",
    incluye: ["Retratos personalizados", "Composiciones abstractas", "Obras de gran formato", "Técnicas mixtas"],
  },
  {
    icon: GraduationCap,
    titulo: "Clases de Arte",
    descripcion: "Talleres y clases personalizadas de técnicas pictóricas.",
    precio: "$80.000/hora",
    incluye: ["Técnicas de pintura al óleo", "Claroscuro y sombreado", "Composición moderna", "Clases individuales"],
  },
  {
    icon: Users,
    titulo: "Colaboraciones",
    descripcion: "Participación en exposiciones y proyectos artísticos.",
    precio: "Consultar",
    incluye: [
      "Exposiciones colectivas",
      "Murales urbanos",
      "Proyectos de investigación",
      "Colaboraciones interdisciplinarias",
    ],
  },
]

export default function ServiciosPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 font-typewriter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-red">
            SERVICIOS
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Gama completa de servicios artísticos, desde obras personalizadas hasta formación especializada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {servicios.map((servicio, index) => (
            <Card
              key={index}
              className="bg-black/50 border-electric-blue/30 hover:border-electric-red/50 transition-all duration-300 group"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <servicio.icon className="w-12 h-12 sm:w-16 sm:h-16 text-electric-red mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl sm:text-2xl font-bold text-electric-blue mb-3 sm:mb-4">{servicio.titulo}</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{servicio.descripcion}</p>
                <div className="text-electric-red font-bold text-lg sm:text-xl mb-4 sm:mb-6">{servicio.precio}</div>
                <ul className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 space-y-1 sm:space-y-2">
                  {servicio.incluye.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
                <Link href="/contacto">
                  <Button
                    variant="outline"
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white bg-transparent w-full font-typewriter text-sm sm:text-base"
                  >
                    SOLICITAR
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Proceso */}
        <Card className="bg-black/50 border-electric-red/30 max-w-4xl mx-auto">
          <CardContent className="p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-electric-red mb-6 sm:mb-8 text-center">
              PROCESO DE TRABAJO
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {["Consulta", "Propuesta", "Creación", "Entrega"].map((paso, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-electric-blue/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 border border-electric-blue">
                    <span className="text-electric-blue font-bold text-sm sm:text-base">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-electric-blue mb-1 sm:mb-2 text-sm sm:text-base">{paso}</h4>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
