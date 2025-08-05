import { Card, CardContent } from "@/components/ui/card"

const exposiciones = [
  {
    tipo: "colectiva",
    titulo: "LUTTE / LUCHA",
    año: "2021",
    lugar: "Toulouse, Francia",
    descripcion: "Exposición internacional sobre luchas sociales contemporáneas.",
  },
  {
    tipo: "colectiva",
    titulo: "III Festival de Muralismo SOPINGA COLOR'S",
    año: "2022",
    lugar: "Virginia, Risaralda",
    descripcion: "Mural urbano integrando elementos contemporáneos con identidad cultural local.",
  },
  {
    tipo: "individual",
    titulo: "LA NARRATIVA DE LA CIUDAD PARALELA",
    año: "2023",
    lugar: "Pereira (Proyecto de Grado)",
    descripcion: "Investigación artística sobre habitantes de calle, dignificando sus historias.",
  },
  {
    tipo: "reconocimiento",
    titulo: "GANADOR CONVOCATORIA",
    año: "2024",
    lugar: "Corto Circuito",
    descripcion: "Reconocimiento que validó mi propuesta artística con apoyo institucional.",
  },
]

export default function ColaboracionesPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 font-typewriter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-red">
            COLABORACIONES
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Exposiciones, festivales y proyectos que han marcado mi trayectoria artística
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 max-w-4xl mx-auto">
          {exposiciones.map((expo, index) => (
            <Card
              key={index}
              className="bg-black/50 border-electric-blue/30 hover:border-electric-red/50 transition-all duration-300"
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3 sm:gap-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-electric-blue">{expo.titulo}</h3>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-electric-red/20 text-electric-red rounded-full text-xs sm:text-sm font-semibold">
                      {expo.año}
                    </span>
                    <span className="px-2 py-1 sm:px-3 sm:py-1 bg-electric-blue/20 text-electric-blue rounded-full text-xs sm:text-sm font-semibold">
                      {expo.tipo}
                    </span>
                  </div>
                </div>
                <p className="text-electric-red font-semibold mb-2 text-sm sm:text-base">{expo.lugar}</p>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{expo.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <Card className="bg-black/50 border-electric-red/30 max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-electric-red mb-4">GRUPO DE INVESTIGACIÓN</h2>
              <p className="text-lg sm:text-xl font-semibold text-electric-blue mb-2">INDICIOS: Educación y Arte</p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Miembro activo explorando las intersecciones entre educación artística y práctica creativa
                contemporánea.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
