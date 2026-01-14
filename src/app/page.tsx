import Header from "@/components/Header";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShieldAlert, Users, History } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800">
      <Header />

      {/* Conteúdo Principal */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Container da foto com emoji */}
          <div className="relative mb-6 inline-block sm:mb-8">
            <div className="relative">
              <Image
                src="/aag.jpeg"
                alt="Foto do Giba"
                width={320}
                height={320}
                className="h-auto w-48 rounded-2xl border-4 border-red-500 shadow-2xl shadow-red-500/20 sm:w-64 md:w-80 ring-4 ring-red-500/20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl drop-shadow-[0_0_30px_rgba(255,255,255,0.9)] sm:text-7xl md:text-9xl animate-pulse">
                  🚫
                </span>
              </div>
            </div>
            <Badge variant="destructive" className="mt-4 text-sm px-4 py-1">
              ⚠️ Atenção: Zona Livre de Giba
            </Badge>
          </div>

          <h1 className="mb-4 px-4 text-3xl font-bold text-red-400 sm:text-4xl md:text-5xl lg:text-6xl">
            Associação Anti Giba
          </h1>
          <p className="text-lg text-white/70 sm:text-xl max-w-2xl mx-auto">
            Unidos pela sanidade desde 2016
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105">
            <CardHeader>
              <ShieldAlert className="w-10 h-10 text-red-400 mb-2" />
              <CardTitle className="text-white">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                Proteger a paz e a sanidade mental de todos os afetados através
                da união e solidariedade.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105">
            <CardHeader>
              <Users className="w-10 h-10 text-red-400 mb-2" />
              <CardTitle className="text-white">Comunidade</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                Mais de 10 anos de experiência coletiva em resistência
                organizada e apoio mútuo.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all hover:scale-105">
            <CardHeader>
              <History className="w-10 h-10 text-red-400 mb-2" />
              <CardTitle className="text-white">Desde 2016</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                Uma década de dedicação incansável à causa mais nobre de nossa
                geração.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Main Call to Action Card */}
        <Card className="bg-linear-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-md mb-8">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl sm:text-3xl text-white mb-2">
              Junte-se à Nossa Causa
            </CardTitle>
            <Separator className="bg-red-500/50 my-4" />
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
              Você está cansado? Nós também estamos.
            </p>
            <p className="text-base text-white/80 sm:text-lg max-w-2xl mx-auto">
              Faça parte de um movimento que está mudando vidas. Juntos somos
              mais fortes, juntos pela paz! 💪
            </p>
            <p className="text-sm text-white/60 italic pt-4">
              "Unidos pela sanidade, juntos pela paz" - AAG
            </p>

            <div className="pt-6">
              <Button
                size="lg"
                disabled
                className="bg-gray-600 hover:bg-gray-600 text-white/50 cursor-not-allowed"
              >
                Em Breve? 🤔
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Rodapé */}
        <div className="text-center">
          <Separator className="bg-white/10 mb-6" />
          <p className="text-xs text-white/40 sm:text-sm">
            © 2026 AAG - Todos os direitos reservados • Unidos contra o terror
            desde 2016
          </p>
        </div>
      </div>
    </div>
  );
}
