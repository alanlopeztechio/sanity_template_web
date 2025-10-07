import { sanityFetch } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";
import { GraduationCap } from "lucide-react";
import React from "react";



export const Footer = async () => {
    const {data}  = await  sanityFetch({
        query : settingsQuery
    })


    const { footer } = data || {};
    
    console.log("-----------",footer);
    return <footer className="border-t border-border bg-muted/30">
        <div className="container max-w-screen-xl px-4 py-12">
            <div className="grid gap-8 lg:grid-cols-4">
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <span className="text-lg font-bold text-foreground">EduAdmin</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        La plataforma líder en administración educativa para instituciones modernas.
                    </p>
                </div>

                


                <div>
                    <h3 className="font-semibold text-foreground mb-4">Producto</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Características
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Integraciones
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                API
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Seguridad
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Acerca de
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Carreras
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-foreground mb-4">Soporte</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Centro de Ayuda
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Documentación
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Estado del Sistema
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-foreground transition-colors">
                                Comunidad
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-xs text-muted-foreground">© 2025 EduAdmin. Todos los derechos reservados.</p>
                <div className="flex gap-6 text-xs text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">
                        Privacidad
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                        Términos
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                        Cookies
                    </a>
                </div>
            </div>
        </div>
    </footer>;
}
