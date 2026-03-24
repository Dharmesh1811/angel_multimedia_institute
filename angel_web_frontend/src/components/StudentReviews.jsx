import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Shubham Sadariya',
    course: 'Tally',
    text: 'My name is Shubham i recently completed my Tally course at this computer class and it was a very good experience. The teaching was clear and easy to understand, even for beginners. The trainers explained every topic step by step and also gave practical examples, which made learning Tally very simple.',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Shubham&backgroundColor=b6e3f4',
  },
  {
    name: 'Ratibhai Parmar',
    course: 'Graphics Designing',
    text: 'I am shivani parmar.I recently joined graphics designing course at Angel multimedia institute.my experience was amazing even they taught in very easy manner.best institute for the course of graphics designing at varachha opposite archana vidhya sankul in surat',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Shivani&backgroundColor=ffd5dc',
  },
  {
    name: 'Miska Sharma',
    course: 'Digital Marketing',
    text: 'I have completed Digital marketing cource from Angel Multimedia Institute and my experience was amazing! The faculty is excellent, and the practical learning approach helped me a lot. I highly recommend this institute!"best institute for the course of Digital marketing in varchha surat☺️',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Miska&backgroundColor=c0aede',
  },
  {
    name: 'Prakash B Rao',
    course: 'Full Stack Development',
    text: 'I am apeksha.I was completed my full stack development course from angel multimedia institute.overall experience was very satisfactory👍🙂Best full stack development course institute in varachha Surat 👍',
    rating: 4,
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Apeksha&backgroundColor=ffdfbf',
  },
  {
    name: 'Kuldip Kubavat',
    course: 'CCC',
    text: 'Hii I am kuldip from sahara darwaja surat. I have completed CCC course from Angel multimedia institute and now I am doing graphic course from here. Really their teaching method is really very good 😇😄',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Kuldip&backgroundColor=d1f4cc',
  },
  {
    name: 'Piyush Katariya',
    course: 'Graphics Designing',
    text: 'I am piyush ahir. I recently joined angel multimedia Institute for the cource of graphics designing. Excellent faculty and good atmosphere. Best institute in varachha surat for graphics designing cource.',
    rating: 3,
    avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Piyush&backgroundColor=ffd5dc',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Student Reviews
          </h2>
          <p className="text-gray-600 text-lg">
            What our students say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-purple-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-purple-200" />
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed min-h-[80px]">
                "{review.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-purple-200">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-200 bg-white"
                />
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
