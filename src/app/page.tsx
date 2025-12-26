import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Heart, Zap } from 'lucide-react';
import { placeholderImages } from '@/lib/placeholder-images.json';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary-foreground tracking-tighter">Pan cake</h1>
          <Button asChild variant="secondary">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40">
          {placeholderImages.length > 0 && 
            <Image
              src={placeholderImages[0].imageUrl}
              alt={placeholderImages[0].description}
              fill
              className="object-cover z-0"
              data-ai-hint={placeholderImages[0].imageHint}
              priority
            />
          }
          <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight" style={{ color: 'hsl(var(--foreground))' }}>
              A safe space for your thoughts.
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl" style={{ color: 'hsl(var(--foreground))' }}>
              Pan cake is your personal AI companion, here to listen, support, and guide you on your mental wellness journey.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/dashboard">
                Start Your Journey <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold">Features to support you</h3>
              <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                We've built Pan cake with features designed to provide comfort and promote well-being.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center bg-background transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-accent/20 rounded-full p-3 w-fit">
                    <MessageSquare className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="mt-4">Interactive Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Talk about anything on your mind. Our AI is here to listen without judgment and offer support.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center bg-background transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-primary/20 rounded-full p-3 w-fit">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Mood Check-ins</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Log your daily mood to understand your emotional patterns and receive personalized encouragement.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center bg-background transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg">
                <CardHeader>
                  <div className="mx-auto bg-secondary rounded-full p-3 w-fit">
                    <Zap className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="mt-4">Positive Affirmations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Start your day with a positive mindset. Generate affirmations tailored to your needs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Pan cake. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
