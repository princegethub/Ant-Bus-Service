import React from "react";
import BlogCard from "./BlogCard";
// import Img1 from "../../assets/places/tajmahal.jpg";
import Img1 from "../../assets/places/bg1.jpeg";
// import Img2 from "../../assets/places/water.jpg";
import Img2 from "../../assets/places/bg2.webp";
// import Img3 from "../../assets/places/boat.jpg";
import Img3 from "../../assets/places/bg3.jpg";
const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Mathura - The Birthplace of Lord Krishna",
    description:
      "Mathura, one of the holiest cities in India, is known as the birthplace of Lord Krishna. This sacred land is filled with divine energy and historical significance. Our free pilgrimage to Mathura offers devotees an opportunity to visit Shri Krishna Janmabhoomi, the exact site where Lord Krishna was born. The temple complex here is a spiritual haven that attracts thousands of devotees daily.\n\nApart from the Janmabhoomi, pilgrims can explore the Dwarkadhish Temple, known for its exquisite architecture and vibrant celebrations. The Vishram Ghat on the banks of the Yamuna River is another must-visit site, where Lord Krishna is believed to have rested after defeating the tyrant Kansa. The holy city comes alive with religious fervor, especially during Janmashtami and Holi.\n\nOur free bus service ensures a smooth and comfortable journey for all pilgrims, allowing them to focus entirely on their spiritual experience. Join us and immerse yourself in the divine atmosphere of Mathura!",
    author: "ANT Bus Service",
    date: "Coming Soon",
  },
  {
    id: 2,
    image: Img2,
    title: "Vaishno Devi - The Holy Cave of Maa Durga",
    description:
      "Vaishno Devi, one of the most revered pilgrimage sites in India, is dedicated to Goddess Vaishno Devi, a manifestation of Goddess Durga. Nestled in the Trikuta Mountains of Jammu and Kashmir, this sacred shrine attracts millions of devotees every year who undertake the spiritual journey to seek the blessings of the Divine Mother.\n\nOur free pilgrimage to Vaishno Devi offers devotees an opportunity to experience the divine energy of this holy site. The trek to the Bhawan (sanctum sanctorum) is filled with chants of 'Jai Mata Di,' creating an atmosphere of devotion and faith. The darshan of the holy pindis (natural rock formations representing the Goddess) is considered a highly auspicious and transformative experience.\n\nAlong the route, pilgrims can visit Ardhkuwari, where Mata Vaishno Devi is believed to have meditated for nine months. The Bhairon Temple, located at the summit, is another important stop, as it is said that the pilgrimage is incomplete without visiting this temple.\n\nThe journey is both physically and spiritually rewarding, and facilities like ponies, palkis, and helicopter services are available for devotees. Our free bus service ensures a smooth and comfortable journey, making it easier for devotees to embark on this sacred yatra. Join us and be a part of this divine journey to the abode of Maa Vaishno Devi!",
    author: "ANT Bus Service",
    date: "Coming Soon",
  },

  {
    id: 3,
    image: Img3,
    title: "Khatu Shyam - The Miraculous Deity",
    description:
      "Khatu Shyam Ji is one of the most revered deities in Hinduism, believed to be an incarnation of Lord Krishna himself. Devotees visit Khatu Shyam Temple seeking blessings for prosperity, peace, and the fulfillment of their wishes. Our free pilgrimage to Khatu Shyam Ji offers a chance to be part of this divine journey and witness the spiritual aura of this sacred place.\n\nThe temple, located in the Sikar district of Rajasthan, is famous for its grand architecture and spiritual significance. Pilgrims believe that a single sincere prayer to Khatu Shyam Ji can remove all obstacles and bring immense joy. The temple’s daily aarti and bhajan sessions create an atmosphere of unparalleled devotion. \n\nDuring the Phalgun Mela, the temple attracts lakhs of devotees who come to offer their prayers and take part in the grand festivities. The journey to Khatu Shyam is not just a religious trip but also an experience of faith and miracles. Our free bus service ensures a comfortable journey, allowing you to focus on your spiritual connection with the deity. Don't miss this opportunity to be part of a truly divine experience!",
    author: "ANT Bus Service",
    date: "Coming Soon",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 rounded-lg overflow-hidden  dark:text-white py-20">
        <section data-aos="fade-up" className="container ">
        <div className="text-center mb-12">

<p style={{color: '#ea580c'}} className="text-xl font-bold text-orange-600 p relative inline-block">
Journey
</p>


<h1
  className="text-4xl font-semibold"
  style={{ fontFamily: "'Poppins', cursive" }}
>
  Upcoming Journey
</h1>
</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
