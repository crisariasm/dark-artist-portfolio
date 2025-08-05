"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Heart } from "lucide-react"
import { artworks } from "@/lib/art-works"

type Artwork = {
  id: number
  title: string
  year: string
  technique: string
  dimensions: string
  description: string
  image: string
}

export default function GaleriaPage() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 font-typewriter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-red">
            GALERÍA
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Colección de obras que exploran la expresión individual a través del arte contemporáneo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artworks.map((artwork) => (
            <Card
              key={artwork.id}
              className="bg-black/50 border-electric-blue/30 hover:border-electric-red/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-electric-blue mb-2">{artwork.title}</h3>
                <p className="text-gray-400 text-sm">
                  {artwork.year} • {artwork.technique}
                </p>
                <p className="text-gray-500 text-xs mt-1">{artwork.dimensions}</p>

                <div className="flex gap-2 sm:gap-3 mt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white bg-transparent font-typewriter shadow-lg transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
                        onClick={() => setSelectedArtwork(artwork)}
                      >
                        <Eye className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        VER MÁS
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-black border-electric-red/30 text-white w-[95vw] max-w-4xl max-h-[90vh] overflow-y-auto">
                      {selectedArtwork && (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-xl sm:text-2xl font-bold text-electric-blue">
                              {selectedArtwork.title}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                            <img
                              src={selectedArtwork.image || "/placeholder.svg"}
                              alt={selectedArtwork.title}
                              className="w-full h-auto rounded-lg"
                            />
                            <div className="space-y-4 sm:space-y-6">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-electric-blue font-semibold">Año:</p>
                                  <p>{selectedArtwork.year}</p>
                                </div>
                                <div>
                                  <p className="text-electric-blue font-semibold">Técnica:</p>
                                  <p>{selectedArtwork.technique}</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-electric-blue font-semibold">Dimensiones:</p>
                                  <p>{selectedArtwork.dimensions}</p>
                                </div>
                              </div>
                              <div>
                                <p className="text-electric-blue font-semibold mb-2">Descripción:</p>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                  {selectedArtwork.description}
                                </p>
                              </div>
                              <a
                                href={`https://wa.me/573126538045?text=Hola, estoy interesado en la obra "${selectedArtwork.title}"`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Button className="w-full bg-gradient-to-r from-electric-red to-electric-blue hover:from-electric-blue hover:to-electric-red font-typewriter">
                                  <Heart className="w-4 h-4 mr-2" />
                                  ESTOY INTERESADO
                                </Button>
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                    </DialogContent>
                  </Dialog>

                  <a
                    href={`https://wa.me/573126538045?text=Hola, estoy interesado en la obra "${artwork.title}"`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-electric-red text-electric-red hover:bg-electric-red hover:text-white bg-transparent font-typewriter shadow-lg transform hover:scale-105 transition-all duration-200 text-xs sm:text-sm"
                    >
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      ME INTERESA
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
