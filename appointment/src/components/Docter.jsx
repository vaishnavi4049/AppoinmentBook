import { Link } from 'react-router-dom';  // Correct for React

// import Image from "next/image"
import Button from "../components/ui/Button";  // Adjust according to your directory structure


import { Card, CardContent } from "./ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
//import { CalendarDays, Clock, MapPin, Phone, Mail, ArrowRight, Search, Heart, Activity, Stethoscope, Users, Microscope, Brain } from 'lucide-react'
// import AppointmentForm from "@/components/appointment-form"


export default function Docter() {
  return (
    <div className="flex flex-col min-h-screen">
        
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* <Heart className="h-6 w-6 text-teal-600" /> */}
            <span className="text-xl font-bold">MediCare</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Services
            </Link>
            <Link href="#doctors" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Doctors
            </Link>
            <Link href="#appointment" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Appointment
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              {/* <Search className="h-5 w-5" /> */}
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="outline" className="hidden md:flex">
              {/* <Phone className="mr-2 h-4 w-4" /> Emergency: 1-800-123-4567 */}
            </Button>
             <Link to="/DoctorDashboard">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                   Appoinment
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                   Logout
                  </Button>
                </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <span className="sr-only">Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
      <section className="relative w-full py-12 md:py-24 lg:py-32 mt-2 overflow-hidden">
  {/* Background Image with Opacity */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-80"
    style={{ backgroundImage: "url('/image2.png.jpg')" }}
  />

  {/* Main Content */}
  <div className="relative z-10">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            To heal is a duty; to care is a responsibility.
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Providing exceptional healthcare services with compassion and expertise. Our team of specialists is dedicated to your well-being.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link to="/DoctorDashboard">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Appoinment
                  </Button>
                </Link>
            <Button size="lg" variant="outline">
              Our Services
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* Optional content */}
        </div>
      </div>
    </div>
  </div>
</section>


        <section className="w-full py-12 md:py-24 lg:py-32" id="services">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Comprehensive Healthcare Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a wide range of medical services to meet your healthcare needs with state-of-the-art facilities and expert care.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="rounded-full bg-teal-100 p-3">
                      {/* <Heart className="h-6 w-6 text-teal-700" /> */}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold">Cardiology</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Comprehensive heart care with advanced diagnostic and treatment options.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="rounded-full bg-teal-100 p-3">
                      {/* <Brain className="h-6 w-6 text-teal-700" /> */}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold">Neurology</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Expert care for neurological disorders with personalized treatment plans.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="rounded-full bg-teal-100 p-3">
                      {/* <Microscope className="h-6 w-6 text-teal-700" /> */}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold">Laboratory</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Advanced diagnostic testing with quick and accurate results.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center justify-center">
                    <div className="rounded-full bg-teal-100 p-3">
                      {/* <Activity className="h-6 w-6 text-teal-700" /> */}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold">Emergency</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    24/7 emergency care with rapid response and expert medical attention.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              {/* <Button variant="outline" className="gap-1">
                View All Services <ArrowRight className="h-4 w-4" />
              </Button> */}
            </div>
          </div>
        </section>

       <section className="w-full py-12 md:py-24 lg:py-32" id="services">
                 <div className="container px-4 md:px-6">
                   <div className="flex flex-col items-center justify-center space-y-4 text-center">
                     <div className="space-y-2">
                       <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                         Our Services
                       </div>
                       <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                         Comprehensive Healthcare Services
                       </h2>
                       <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                         We offer a wide range of medical services to meet your healthcare needs with state-of-the-art facilities and expert care.
                       </p>
                     </div>
                   </div>
                   <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                                 <Card>
                                   <CardContent className="p-0">
                                   <img src="image1.png" alt="Image" className="w-full h-auto" />
                                     <div className="p-6">
                                       <h3 className="text-lg font-bold">Dr. Sujata Holkar</h3>
                                       <p className="text-sm text-teal-600">Docter Id:adhavvaishnavi</p>
                                       <p className="text-sm text-teal-600">Cardiologist</p>
                                       <p className="text-sm text-muted-foreground mt-2">
                                         Board certified with over 15 years of experience in treating heart conditions.
                                       </p>
                                       <Button variant="outline" className="w-full mt-4">View Profile</Button>
                                     </div>
                                   </CardContent>
                                 </Card>
                                 <Card>
                                   <CardContent className="p-0">
                                   <img src="/image5.jpg" alt="Image" className="w-full h-auto" />
                                     <div className="p-6">
                                       <h3 className="text-lg font-bold">Dr. Michael Chen</h3>
                                       <p className="text-sm text-teal-600">Docter Id:Test@123</p>
                                       <p className="text-sm text-teal-600">Neurologist</p>
                                       <p className="text-sm text-muted-foreground mt-2">
                                         Specialized in advanced neurological treatments with a patient-centered approach.
                                       </p>
                                       <Button variant="outline" className="w-full mt-4">View Profile</Button>
                                     </div>
                                   </CardContent>
                                 </Card>
                                 <Card>
                                   <CardContent className="p-0">
                                   <img src="/image3.jpg" alt="Img" className="w-full h-auto" />
                                     <div className="p-6">
                                       <h3 className="text-lg font-bold">Dr. Devid Rodriguez</h3>
                                       <p className="text-sm text-teal-600">Docter Id: 123456</p>
                                       <p className="text-sm text-teal-600">Pediatrician</p>
                                       <p className="text-sm text-muted-foreground mt-2">
                                         Dedicated to providing compassionate care for children of all ages.
                                       </p>
                                       <Button variant="outline" className="w-full mt-4">View Profile</Button>
                                     </div>
                                   </CardContent>
                                 </Card>
                               </div>
                   <div className="flex justify-center">
                     {/* <Button variant="outline" className="gap-1">
                       View All Services <ArrowRight className="h-4 w-4" />
                     </Button> */}
                   </div>
                 </div>
               </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="appointment">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                    Appointment
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Book Your Appointment
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Schedule a visit with our specialists. We're committed to providing timely and efficient care for all your health needs.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    {/* <div className="rounded-full bg-teal-100 p-2">
                      <CalendarDays className="h-5 w-5 text-teal-700" />
                    </div> */}
                    <div>
                      <h3 className="font-medium">Flexible Scheduling</h3>
                      <p className="text-sm text-muted-foreground">Choose from a variety of available time slots</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* <div className="rounded-full bg-teal-100 p-2">
                      <Clock className="h-5 w-5 text-teal-700" />
                    </div> */}
                    <div>
                      <h3 className="font-medium">Quick Confirmation</h3>
                      <p className="text-sm text-muted-foreground">Receive immediate appointment confirmation</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* <div className="rounded-full bg-teal-100 p-2">
                      <Stethoscope className="h-5 w-5 text-teal-700" />
                    </div> */}
                    <div>
                      <h3 className="font-medium">Expert Care</h3>
                      <p className="text-sm text-muted-foreground">Connect with our specialized healthcare professionals</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {/* <div className="w-full max-w-md">
                  <AppointmentForm />
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  What Our Patients Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Read about the experiences of our patients and their journey to better health with us.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-teal-100 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal-700">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">John D.</span>
                      <span className="text-xs text-muted-foreground">Cardiology Patient</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The care I received at MediCare was exceptional. Dr. Johnson took the time to explain my condition and treatment options. I felt heard and cared for throughout my entire experience."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0d9488" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-teal-100 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal-700">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">Sarah M.</span>
                      <span className="text-xs text-muted-foreground">Pediatric Patient Parent</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Dr. Rodriguez is amazing with children. My son was nervous about his appointment, but she made him feel comfortable and at ease. The entire staff is friendly and professional."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0d9488" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-teal-100 p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-teal-700">
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium">Robert T.</span>
                      <span className="text-xs text-muted-foreground">Neurology Patient</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "The online appointment booking system was so convenient. I was able to schedule my visit with Dr. Chen quickly, and the follow-up care has been excellent. Highly recommend MediCare."
                  </p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#0d9488" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="contact">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-700">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Get in Touch
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Have questions or need assistance? Our team is here to help you with any inquiries you may have.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    {/* <div className="rounded-full bg-teal-100 p-2">
                      <MapPin className="h-5 w-5 text-teal-700" />
                    </div> */}
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-sm text-muted-foreground">123 Medical Center Drive, Healthville, CA 90210</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* <div className="rounded-full bg-teal-100 p-2">
                      <Phone className="h-5 w-5 text-teal-700" />
                    </div> */}
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (800) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* <div className="rounded-full bg-teal-100 p-2">
                      <Mail className="h-5 w-5 text-teal-700" />
                    </div> */}
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">info@medicare-hospital.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* <div className="rounded-full bg-teal-100 p-2">
                      <Clock className="h-5 w-5 text-teal-700" />
                    </div> */}
                    <div>
                      <h3 className="font-medium">Hours</h3>
                      <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p className="text-sm text-muted-foreground">Saturday: 8:00 AM - 2:00 PM</p>
                      <p className="text-sm text-muted-foreground">Sunday: Closed (Emergency Services Available 24/7)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
              <img src="image.png" alt="Image" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          {/* <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-teal-600" />
            <span className="text-xl font-bold">MediCare</span>
          </div> */}
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2023 MediCare Hospital. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-teal-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-teal-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
