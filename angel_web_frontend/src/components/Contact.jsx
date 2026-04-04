import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  mobile: z.string()
    .length(10, 'Mobile number must be exactly 10 digits')
    .regex(/^[0-9]+$/, 'Only numbers are allowed'),
  address: z.string().min(5, 'Address is required'),
  city: z.string().min(2, 'City is required'),
  course: z.string().min(2, 'Please enter the course you are interested in'),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      mobile: '',
      address: '',
      city: '',
      course: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    const eventId = Date.now(); // 🔥 unique tracking id

    try {
      await fetch(`${import.meta.env.VITE_API_URL}/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          event_id: eventId, // 🔁 send to backend
        }),
      });

      // ✅ FIRE META EVENT AFTER SUCCESS
      if (window.fbq) {
        window.fbq(
          'track',
          'Lead',
          {
            content_name: 'Contact Form',
            content_category: 'Computer Course',
          },
          { eventID: eventId }
        );
      }

      toast.success('Inquiry submitted successfully! We will contact you soon.');
      form.reset();

    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Something went wrong. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-gray-600 text-lg">
            Get in touch with us to start your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-50">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Inquiry</h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number *</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          maxLength={10}
                          placeholder="xxxxxxxxxx"
                          onInput={(e) => {
                            const val = e.target.value.replace(/[^0-9]/g, '');
                            e.target.value = val.slice(0, 10);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address *</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Your complete address" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Surat" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interested Course *</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Graphics, Web, Video..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-6 rounded-xl"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Inquiry
                    </>
                  )}
                </Button>

              </form>
            </Form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-purple-500" />
                  <p>Varachha, Surat, Gujarat</p>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-purple-500" />
                  <p>+91 8866338688</p>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-purple-500" />
                  <p>info@angelmultimedia.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}