"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Instagram, MapPin, MessageCircle } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // Crear mensaje para WhatsApp
    const whatsappMessage = `Hola Stiven, soy ${formData.name}.

*Asunto:* ${formData.subject}

*Mensaje:*
${formData.message}

¡Espero tu respuesta!`

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Abrir WhatsApp
    window.open(`https://wa.me/573126538045?text=${encodedMessage}`, "_blank")
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: Phone, label: "Teléfono", value: "3126538045", href: "tel:3126538045" },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@stiven.bermudez.art",
      href: "https://instagram.com/stiven.bermudez.art",
    },
    { icon: MapPin, label: "Ubicación", value: "Pereira, Risaralda", href: null },
  ]

  const getSubjectLabel = (value) => {
    const subjects = {
      "obra-personalizada": "Obra Personalizada",
      clases: "Clases de Arte",
      colaboracion: "Colaboración",
      "compra-obra": "Compra de Obra Existente",
      otro: "Otro",
    }
    return subjects[value] || value
  }

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20 font-typewriter">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-red">
            CONTACTO
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            ¿Listo para plasmar tu visión en arte? Conectemos y démosle vida a tus ideas más creativas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Información de Contacto */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-electric-red mb-6 sm:mb-8">CONECTEMOS</h2>
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-black/50 border border-electric-red/30 rounded-lg hover:border-electric-blue/50 transition-colors"
                >
                  <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-electric-blue flex-shrink-0" />
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        className="text-white text-sm sm:text-base lg:text-lg hover:text-electric-blue transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm sm:text-base lg:text-lg">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="text-center p-3 sm:p-4 bg-electric-red/20 rounded-lg border border-electric-blue/30">
                <h4 className="text-electric-blue font-semibold text-xs sm:text-sm">Obras Personalizadas</h4>
                <p className="text-gray-300 text-xs mt-1">Desde $500.000</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-electric-red/20 rounded-lg border border-electric-blue/30">
                <h4 className="text-electric-blue font-semibold text-xs sm:text-sm">Clases Privadas</h4>
                <p className="text-gray-300 text-xs mt-1">$80.000/hora</p>
              </div>
              <div className="text-center p-3 sm:p-4 bg-electric-red/20 rounded-lg border border-electric-blue/30">
                <h4 className="text-electric-blue font-semibold text-xs sm:text-sm">Colaboraciones</h4>
                <p className="text-gray-300 text-xs mt-1">Consultar</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <Card className="bg-black/50 border-electric-red/30">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-electric-blue mb-4 sm:mb-6">ENVÍAME UN MENSAJE</h3>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-electric-blue mb-2">Tu nombre *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 bg-black/50 border border-electric-red/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-electric-blue mb-2">Asunto *</label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 bg-black/50 border border-electric-red/30 rounded-lg text-white focus:border-electric-blue focus:outline-none transition-colors text-sm sm:text-base"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="obra-personalizada">Obra Personalizada</option>
                    <option value="clases">Clases de Arte</option>
                    <option value="colaboracion">Colaboración</option>
                    <option value="compra-obra">Compra de Obra Existente</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-electric-blue mb-2">Tu mensaje *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 bg-black/50 border border-electric-red/30 rounded-lg text-white placeholder-gray-500 focus:border-electric-blue focus:outline-none resize-none transition-colors text-sm sm:text-base"
                    placeholder="Cuéntame sobre tu proyecto, idea o consulta..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-electric-red to-electric-blue hover:from-electric-blue hover:to-electric-red text-white py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  ENVIAR POR WHATSAPP
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
