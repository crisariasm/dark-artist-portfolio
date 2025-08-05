"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, GraduationCap, Users, ArrowRight, Eye } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-typewriter">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-electric-blue/10 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-electric-blue/30 rotate-45"></div>
          <div className="absolute bottom-40 right-32 w-24 h-24 border border-electric-red/30 rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-electric-blue/40 rotate-45"></div>
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-red tracking-wider">
                STIVEN
              </h1>
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white/90 tracking-wider">
                BERMÚDEZ
              </h2>
              <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-electric-blue to-electric-red mx-auto lg:mx-0"></div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-2xl font-typewriter">
              Licenciado en Artes Visuales especializado en crítica social, sociedad consumista y realismo mágico. Mi
              obra explora la angustia humana a través de diseños y colores eclécticos.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center lg:justify-start">
              <Badge
                variant="outline"
                className="border-electric-blue text-electric-blue px-3 py-1 sm:px-4 sm:py-2 font-typewriter text-xs sm:text-sm"
              >
                <Palette className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                ARTE CONTEMPORÁNEO
              </Badge>
              <Badge
                variant="outline"
                className="border-electric-red text-electric-red px-3 py-1 sm:px-4 sm:py-2 font-typewriter text-xs sm:text-sm"
              >
                <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                LICENCIADO UTP
              </Badge>
              <Badge
                variant="outline"
                className="border-electric-blue text-electric-blue px-3 py-1 sm:px-4 sm:py-2 font-typewriter text-xs sm:text-sm"
              >
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                CRÍTICA SOCIAL
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/galeria">
                <Button className="bg-gradient-to-r from-electric-blue to-electric-blue-dark hover:from-electric-blue-light hover:to-electric-blue text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto font-typewriter tracking-wider">
                  EXPLORAR OBRA
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contacto">
                <Button
                  variant="outline"
                  className="border-electric-red text-electric-red hover:bg-electric-red hover:text-white bg-transparent px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto font-typewriter tracking-wider"
                >
                  CONTACTAR
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 to-electric-red/20 rounded-lg blur-xl"></div>
            <img
              src="https://ik.imagekit.io/hi0ocsyfm/DSC03827%20(1).JPG?updatedAt=1753411525269"
              alt="Stiven Bermúdez - Artista Visual"
              className="relative z-10 w-full h-auto rounded-lg shadow-2xl border border-electric-blue/30"
            />
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-black to-electric-blue/5">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-2 sm:gap-4">
            <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-electric-red" />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-electric-blue font-typewriter tracking-wider">
              FILOSOFÍA ARTÍSTICA
            </h2>
          </div>
          <blockquote className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed font-typewriter max-w-4xl mx-auto">
            "CADA SER HUMANO TIENE SU PROPIA HISTORIA. MI PROYECTO DE VIDA ES GENERAR REPRESENTACIONES SOBRE LA ANGUSTIA
            QUE NOS ATORMENTA, PARA COMPRENDER QUE TODOS TENEMOS LA OPORTUNIDAD DE SER FELICES."
          </blockquote>
          <p className="text-electric-red font-semibold mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg font-typewriter tracking-wider">
            - STIVEN DANIEL BERMÚDEZ MUÑOZ
          </p>
        </div>
      </section>
    </div>
  )
}
