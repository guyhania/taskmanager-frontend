import { Separator } from "../components/ui/separator"

export function Header() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-12 pb-4 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
        Task Manager
      </h1>
      <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
        Organize your tasks efficiently and stay on top of your work.
      </p>
      <Separator className="mx-auto max-w-sm" />
    </section>
  )
}
