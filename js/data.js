// ===== DATA DESTINASI WISATA =====

const destinationsData = {
  ciputat: [
    {
      id: "tanah-tingal",
      title: "Tanah Tingal",
      image: "https://images.unsplash.com/photo-1540959733332-8cbd5d35a0db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Wisata alam dan edukasi yang menawarkan pengalaman belajar sambil bermain di alam terbuka. Tempat yang cocok untuk keluarga dan anak-anak.",
      rating: 4.3,
      reviewCount: 89,
      categories: ["alam", "edukasi", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.317217331874!2d106.7181439!3d-6.2996439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e554aa19dabb%3A0x32d27fae22fc5751!2sSekolah%20Tanah%20Tingal!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Cireundeu Raya No. 1, Ciputat, Tangerang Selatan"
    },
    {
      id: "kandank-jurank-doank",
      title: "Kandank Jurank Doank",
      image: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Wisata edukasi kreatif yang dikembangkan oleh Dik Doank. Tempat ini menawarkan berbagai aktivitas seni, musik, dan alam untuk anak-anak.",
      rating: 4.5,
      reviewCount: 156,
      categories: ["edukasi", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.297217331874!2d106.7265365!3d-6.2959256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f006dfa04409%3A0xd7b545ee01c3c4eb!2sKandank%20Jurank%20Creative%20Park!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Cireundeu Raya, Ciputat, Tangerang Selatan"
    },
    {
      id: "hutan-kota-jombang",
      title: "Hutan Kota Jombang",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Ruang terbuka hijau yang asri di tengah kota. Tempat ideal untuk bersantai, jogging, atau sekadar menikmati udara segar.",
      rating: 4.2,
      reviewCount: 234,
      categories: ["alam", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.417217331874!2d106.696783!3d-6.289183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb75baea8d05%3A0xc4b0097af0c92b4c!2sTaman%20Hutan%20Kota%20Jombang!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Jombang Raya, Ciputat, Tangerang Selatan"
    }
  ],

  ciputattimur: [
    {
      id: "situ-gintung-2",
      title: "Taman Wisata Pulau Situ Gintung 2",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Destinasi wisata alam dengan danau yang indah, cocok untuk bersantai, memancing, dan menikmati pemandangan alam.",
      rating: 4.1,
      reviewCount: 178,
      categories: ["alam", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.517217331874!2d106.7624834!3d-6.3097675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f02c4a2752ff%3A0xd27fca03967a378f!2sTaman%20Wisata%20Pulau%20Situ%20Gintung%202!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Situ Gintung, Ciputat Timur, Tangerang Selatan"
    },
    {
      id: "camping-ground-situ-gintung",
      title: "Camping Ground Situ Gintung",
      image: "https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Area camping yang nyaman di tepi danau, perfect untuk berkemah keluarga atau gathering dengan teman-teman.",
      rating: 4.4,
      reviewCount: 92,
      categories: ["alam", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.497217331874!2d106.7630989!3d-6.3076079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef000417f283%3A0x1e79bd1ed9830c44!2sCamping%20ground%20Situ%20Gintung!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Situ Gintung, Ciputat Timur, Tangerang Selatan"
    }
  ],

  setu: [
    {
      id: "paradise-dreamland",
      title: "Paradise Dreamland Swimming Pool",
      image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Kolam renang dan playground yang menyenangkan untuk keluarga. Dilengkapi berbagai wahana air dan area bermain anak.",
      rating: 4.0,
      reviewCount: 145,
      categories: ["keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.717217331874!2d106.696037!3d-6.3497684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5242f47565f%3A0xc5c48493ef0c0b03!2sParadise%20Dreamland%20Swimming%20Pool!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Raya Serpong, Setu, Tangerang Selatan"
    },
    {
      id: "taman-tekno-bsd",
      title: "Taman Tekno BSD",
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Kawasan hijau dengan konsep edukasi teknologi. Tempat yang cocok untuk belajar sambil menikmati alam.",
      rating: 4.2,
      reviewCount: 87,
      categories: ["alam", "edukasi"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.617217331874!2d106.6785167!3d-6.3403315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5678c08d0e1%3A0xf8b2ba19f7b55cd5!2sTaman%20Tekno%20BSD%20SERPONG!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Tekno BSD, Setu, Tangerang Selatan"
    }
  ],

  pondokaren: [
    {
      id: "bintaro-xchange-mall",
      title: "Bintaro Xchange Mall (BXc Mall & BXc Park)",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Pusat perbelanjaan modern dilengkapi dengan taman terbuka. Menawarkan berbagai retail, kuliner, dan hiburan.",
      rating: 4.5,
      reviewCount: 567,
      categories: ["belanja", "kuliner", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.217217331874!2d106.7276002!3d-6.2853789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f00b95248a25%3A0x7a92959c5f05e001!2sBintaro%20Jaya%20Xchange%20Mall!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Bintaro Taman Selatan, Pondok Aren, Tangerang Selatan"
    },
    {
      id: "menteng-park-bintaro",
      title: "Taman Menteng Bintaro",
      image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Taman keluarga yang asri dengan berbagai fasilitas bermain anak dan area bersantai untuk keluarga.",
      rating: 4.3,
      reviewCount: 234,
      categories: ["alam", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.117217331874!2d106.7259094!3d-6.2729248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f077bc6559d3%3A0xdf60b4f55c627479!2sTaman%20Menteng%20Bintaro!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Menteng Raya, Bintaro, Pondok Aren, Tangerang Selatan"
    }
  ],

  pamulang: [
    {
      id: "alun-alun-pamulang",
      title: "Alun-Alun Pamulang",
      image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Pusat keramaian kota yang menjadi tempat favorit masyarakat untuk berkumpul, bersantai, dan beraktivitas.",
      rating: 4.1,
      reviewCount: 189,
      categories: ["keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.817217331874!2d106.7349334!3d-6.3443884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efb24feba35b%3A0xd08b71ff89cb39df!2sALUN%20-%20ALUN%20PAMULANG!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Raya Pamulang, Pamulang, Tangerang Selatan"
    },
    {
      id: "danau-pamulang",
      title: "Danau Pamulang",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Wisata alam sederhana dengan danau yang menawan. Tempat yang cocok untuk bersantai dan menikmati pemandangan.",
      rating: 3.9,
      reviewCount: 76,
      categories: ["alam"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.797217331874!2d106.722958!3d-6.342982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efec12ad94f3%3A0x63ebec746151e2b7!2sDanau%20Pamulang!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Siliwangi, Pamulang, Tangerang Selatan"
    },
    {
      id: "taman-edukasi-ganespa",
      title: "Taman Edukasi Ganespa",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Taman anak dengan konsep edukasi yang menyenangkan. Menawarkan berbagai permainan edukatif untuk anak-anak.",
      rating: 4.2,
      reviewCount: 98,
      categories: ["edukasi", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.807217331874!2d106.7288303!3d-6.3434337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efe7ace4f391%3A0x1e280a7d5607058f!2sTaman%20Edukasi%20Ganespa!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Ganesha, Pamulang, Tangerang Selatan"
    }
  ],

  serpong: [
    {
      id: "ocean-park-bsd",
      title: "Ocean Park BSD City",
      image: "https://images.unsplash.com/photo-1574359411659-619d6d6c1415?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Waterpark keluarga terbesar di BSD City dengan berbagai wahana air yang seru dan menyenangkan untuk semua usia.",
      rating: 4.6,
      reviewCount: 892,
      categories: ["keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.017217331874!2d106.669295!3d-6.2923897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb256f6534db%3A0x9713b38571eaca79!2sOcean%20Park%20BSD%20City%20Serpong!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "BSD City, Serpong, Tangerang Selatan"
    },
    {
      id: "scientia-square-park",
      title: "Scientia Square Park (SQP Park)",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Taman edukasi modern dengan konsep sains dan teknologi. Dilengkapi berbagai wahana interaktif yang edukatif.",
      rating: 4.4,
      reviewCount: 345,
      categories: ["edukasi", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.917217331874!2d106.6155004!3d-6.257042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc651e649223%3A0x3b96f2ef67285cd9!2sScientia%20Square%20Park%20(SQP%20Park)!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "BSD City, Serpong, Tangerang Selatan"
    },
    {
      id: "taman-kota-bsd1",
      title: "Taman Kota BSD 1",
      image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Ruang hijau populer di BSD City dengan landscape yang indah, cocok untuk olahraga dan bersantai.",
      rating: 4.3,
      reviewCount: 278,
      categories: ["alam", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.117217331874!2d106.6759069!3d-6.2880094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb20a831fcf7%3A0x50f3f810684b9e19!2sTaman%20Kota%201%20BSD!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "BSD City, Serpong, Tangerang Selatan"
    },
    {
      id: "taman-kota-bsd2",
      title: "Taman Kota BSD 2",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Taman kota kedua di BSD dengan desain yang lebih modern dan fasilitas yang lengkap untuk aktivitas outdoor.",
      rating: 4.2,
      reviewCount: 156,
      categories: ["alam", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.317217331874!2d106.6833105!3d-6.3292468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fad8a505ebbd%3A0x3026f51e304d728c!2sTaman%20Kota%202%20BSD!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "BSD City, Serpong, Tangerang Selatan"
    },
    {
      id: "kampung-konservasi-rimbun",
      title: "Kampung Konservasi RIMBUN",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Destinasi edukasi dan alam yang fokus pada konservasi lingkungan. Menawarkan pengalaman belajar tentang alam dan satwa.",
      rating: 4.5,
      reviewCount: 134,
      categories: ["alam", "edukasi"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.417217331874!2d106.6990566!3d-6.333296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e512ba5304d9%3A0x3df3895e9c38f89b!2sKampung%20Konservasi%20RIMBUN!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Raya Serpong, Serpong, Tangerang Selatan"
    }
  ],

  serpongutara: [
    {
      id: "monumen-palagan-lengkong",
      title: "Monumen Palagan Lengkong",
      image: "https://images.unsplash.com/photo-1589595304102-0d7b28e6c012?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Monumen bersejarah yang mengingatkan pada peristiwa penting di masa lalu. Tempat yang cocok untuk edukasi sejarah.",
      rating: 4.0,
      reviewCount: 67,
      categories: ["edukasi"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.817217331874!2d106.6597427!3d-6.2809542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb1688893b17%3A0xe72861856759cf46!2sMonumen%20Palagan%20Lengkong!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Lengkong, Serpong Utara, Tangerang Selatan"
    },
    {
      id: "broadway-alam-sutera",
      title: "Broadway - The Flavor Bliss Alam Sutera",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Destinasi kuliner dan spot foto yang menarik dengan konsep Broadway. Menawarkan berbagai pilihan makanan dan minuman.",
      rating: 4.4,
      reviewCount: 423,
      categories: ["kuliner"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717217331874!2d106.6509098!3d-6.2422102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb3d3482170f%3A0x25e7a4952697b537!2sBroadway%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Alam Sutera, Serpong Utara, Tangerang Selatan"
    },
    {
      id: "living-world-alam-sutera",
      title: "Living World Alam Sutera",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Pusat perbelanjaan dan hiburan modern dengan berbagai tenant retail, restoran, dan tempat hiburan keluarga.",
      rating: 4.5,
      reviewCount: 678,
      categories: ["belanja", "kuliner", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.717217331874!2d106.653103!3d-6.2443767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbbfddc33093%3A0x12783cb2371fb070!2sLiving%20World%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Alam Sutera, Serpong Utara, Tangerang Selatan"
    },
    {
      id: "the-nice-garden-serpong",
      title: "The Nice Garden Serpong",
      image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Wisata taman keluarga dengan landscape yang indah. Cocok untuk acara keluarga, foto prewedding, atau sekadar bersantai.",
      rating: 4.3,
      reviewCount: 189,
      categories: ["alam", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.517217331874!2d106.6616243!3d-6.3103565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e5714352fc23%3A0xdfffdf5089db55e5!2sThe%20Nice%20Garden%20Serpong!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Raya Serpong, Serpong Utara, Tangerang Selatan"
    },
    {
      id: "mall-alam-sutera",
      title: "Mall @ Alam Sutera",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Pusat hiburan dan belanja yang lengkap dengan berbagai fasilitas modern untuk keluarga dan anak muda.",
      rating: 4.4,
      reviewCount: 512,
      categories: ["belanja", "kuliner", "keluarga"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.617217331874!2d106.6541314!3d-6.221679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbbff86ad0c5%3A0x7637aedafd55dea8!2sMall%20%40%20Alam%20Sutera!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Alam Sutera, Serpong Utara, Tangerang Selatan"
    },
    {
      id: "situ-rawa-kutuk",
      title: "Situ Rawa Kutuk",
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      description: "Danau kecil yang tenang, perfect untuk bersantai dan menikmati ketenangan alam di tengah kota.",
      rating: 3.8,
      reviewCount: 45,
      categories: ["alam"],
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.817217331874!2d106.6606892!3d-6.2518791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb304a041671%3A0x9480888df2dd9014!2sSitu%20Pondok%20Jagung%20-%20Kota%20Tangerang%20Selatan!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid",
      address: "Jl. Raya Serpong, Serpong Utara, Tangerang Selatan"
    }
  ]
};

// ===== KATEGORI WISATA =====
const categoriesData = [
  {
    id: "alam",
    name: "Wisata Alam",
    icon: "fas fa-tree",
    description: "Destinasi dengan pemandangan alam yang menawan",
    color: "green"
  },
  {
    id: "edukasi",
    name: "Wisata Edukasi",
    icon: "fas fa-graduation-cap",
    description: "Tempat belajar sambil berekreasi",
    color: "blue"
  },
  {
    id: "keluarga",
    name: "Wisata Keluarga",
    icon: "fas fa-home",
    description: "Cocok untuk liburan bersama keluarga",
    color: "orange"
  },
  {
    id: "belanja",
    name: "Belanja & Retail",
    icon: "fas fa-shopping-bag",
    description: "Pusat perbelanjaan dan retail",
    color: "purple"
  },
  {
    id: "kuliner",
    name: "Kuliner",
    icon: "fas fa-utensils",
    description: "Destinasi makanan dan minuman",
    color: "red"
  }
];

// ===== KECAMATAN DATA =====
const districtsData = [
  {
    id: "ciputat",
    name: "Ciputat",
    totalDestinations: 3,
    icon: "fas fa-map-marker-alt"
  },
  {
    id: "ciputattimur",
    name: "Ciputat Timur",
    totalDestinations: 2,
    icon: "fas fa-tree"
  },
  {
    id: "setu",
    name: "Setu",
    totalDestinations: 2,
    icon: "fas fa-water"
  },
  {
    id: "pondokaren",
    name: "Pondok Aren",
    totalDestinations: 2,
    icon: "fas fa-shopping-cart"
  },
  {
    id: "pamulang",
    name: "Pamulang",
    totalDestinations: 3,
    icon: "fas fa-university"
  },
  {
    id: "serpong",
    name: "Serpong",
    totalDestinations: 5,
    icon: "fas fa-building"
  },
  {
    id: "serpongutara",
    name: "Serpong Utara",
    totalDestinations: 6,
    icon: "fas fa-city"
  }
];

// ===== CACHE SYSTEM =====
let destinationsCache = null;
let categoryCountsCache = null;
let popularDestinationsCache = null;

// ===== OPTIMIZED FUNCTIONS =====

// Get all destinations dengan cache
function getAllDestinations() {
  if (destinationsCache) {
    return destinationsCache;
  }
  
  const allDestinations = [];
  for (const district in destinationsData) {
    const districtDests = destinationsData[district];
    for (let i = 0; i < districtDests.length; i++) {
      const dest = districtDests[i];
      allDestinations.push({
        ...dest,
        district: district,
        districtName: getDistrictName(district)
      });
    }
  }
  
  destinationsCache = allDestinations;
  return allDestinations;
}

// Get popular destinations dengan cache
function getPopularDestinations(limit = 6) {
  if (popularDestinationsCache && popularDestinationsCache.length >= limit) {
    return popularDestinationsCache.slice(0, limit);
  }
  
  const allDests = getAllDestinations();
  
  popularDestinationsCache = allDests.sort((a, b) => {
    if (b.rating !== a.rating) {
      return b.rating - a.rating;
    }
    return b.reviewCount - a.reviewCount;
  });
  
  return popularDestinationsCache.slice(0, limit);
}

// Get destinations by district
function getDestinationsByDistrict(district) {
  return destinationsData[district] || [];
}

// Get destinations count by category dengan cache - DIPERBAIKI
function getDestinationsCountByCategory() {
  if (categoryCountsCache) {
    return { ...categoryCountsCache };
  }
  
  const allDests = getAllDestinations();
  const categoryCount = {};
  
  // Initialize all categories with 0
  categoriesData.forEach(category => {
    categoryCount[category.id] = 0;
  });
  
  // Count destinations for each category
  for (let i = 0; i < allDests.length; i++) {
    const dest = allDests[i];
    if (dest.categories && Array.isArray(dest.categories)) {
      for (let j = 0; j < dest.categories.length; j++) {
        const cat = dest.categories[j];
        if (categoryCount[cat] !== undefined) {
          categoryCount[cat]++;
        }
      }
    }
  }
  
  categoryCountsCache = categoryCount;
  return { ...categoryCount };
}

// Search destinations
function searchDestinations(query) {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const allDests = getAllDestinations();
  const lowerQuery = query.toLowerCase().trim();
  
  const searchRegex = new RegExp(lowerQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  
  return allDests.filter(dest => 
    searchRegex.test(dest.title) ||
    searchRegex.test(dest.description) ||
    searchRegex.test(dest.address) ||
    searchRegex.test(dest.districtName)
  );
}

// Filter destinations by category - DIPERBAIKI
let lastCategoryFilter = { category: null, result: null };

function filterDestinationsByCategory(category) {
  if (lastCategoryFilter.category === category) {
    return lastCategoryFilter.result;
  }
  
  const allDests = getAllDestinations();
  
  if (!category || category === 'all' || category === '') {
    const result = allDests;
    lastCategoryFilter = { category, result };
    return result;
  }
  
  const filtered = allDests.filter(dest => {
    if (!dest.categories || !Array.isArray(dest.categories)) {
      return false;
    }
    return dest.categories.includes(category);
  });
  
  lastCategoryFilter = { category, result: filtered };
  return filtered;
}

// Helper functions
const districtNames = {
  ciputat: "Ciputat",
  ciputattimur: "Ciputat Timur", 
  setu: "Setu",
  pondokaren: "Pondok Aren",
  pamulang: "Pamulang",
  serpong: "Serpong",
  serpongutara: "Serpong Utara"
};

function getDistrictName(districtKey) {
  return districtNames[districtKey] || districtKey;
}

const categoryMap = {};
categoriesData.forEach(cat => {
  categoryMap[cat.id] = cat;
});

function getCategoryName(categoryKey) {
  const category = categoryMap[categoryKey];
  return category ? category.name : categoryKey;
}

function getCategoryIcon(categoryKey) {
  const category = categoryMap[categoryKey];
  return category ? category.icon : 'fas fa-map-marker-alt';
}

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Get random destinations
function getRandomDestinations(limit = 3) {
  const allDests = getAllDestinations();
  const shuffled = [...allDests];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled.slice(0, limit);
}

// Get destinations by multiple categories
function getDestinationsByCategories(categoryArray) {
  if (!categoryArray || categoryArray.length === 0) {
    return getAllDestinations();
  }
  
  const allDests = getAllDestinations();
  return allDests.filter(dest => 
    dest.categories && categoryArray.some(cat => dest.categories.includes(cat))
  );
}

// Initialize category counts - DIPERBAIKI
let categoryCountsInitialized = false;

function initializeCategoryCounts() {
  if (categoryCountsInitialized) return;
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(updateCategoryCountsDisplay, 500);
    });
  } else {
    setTimeout(updateCategoryCountsDisplay, 800);
  }
  
  categoryCountsInitialized = true;
}

// Update category counts display - DIPERBAIKI
function updateCategoryCountsDisplay() {
  console.log('🔄 Memperbarui tampilan jumlah kategori...');
  
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      performCategoryCountsUpdate();
    });
  } else {
    setTimeout(performCategoryCountsUpdate, 100);
  }
}

function performCategoryCountsUpdate() {
  try {
    const categoryCounts = getDestinationsCountByCategory();
    
    console.log('📊 Jumlah destinasi per kategori:', categoryCounts);
    
    const updates = [];
    
    // Update category count displays
    Object.keys(categoryCounts).forEach(category => {
      const elementId = `count${capitalizeFirst(category)}`;
      const countElement = document.getElementById(elementId);
      
      if (countElement) {
        updates.push({ 
          element: countElement, 
          text: `${categoryCounts[category]} destinasi` 
        });
      } else {
        console.warn(`⚠️ Element dengan ID ${elementId} tidak ditemukan`);
      }
    });
    
    if (updates.length > 0) {
      requestAnimationFrame(() => {
        updates.forEach(update => {
          update.element.textContent = update.text;
        });
        console.log('✅ Tampilan jumlah kategori berhasil diperbarui');
      });
    } else {
      console.warn('⚠️ Tidak ada element kategori yang ditemukan untuk diperbarui');
    }
  } catch (error) {
    console.error('❌ Gagal memperbarui tampilan jumlah kategori:', error);
  }
}

// Filter destinations by multiple criteria
function filterDestinations(filters = {}) {
  let allDests = getAllDestinations();
  
  if (filters.category && filters.category !== 'all') {
    allDests = allDests.filter(dest => 
      dest.categories && dest.categories.includes(filters.category)
    );
  }
  
  if (filters.district && filters.district !== 'all') {
    allDests = allDests.filter(dest => dest.district === filters.district);
  }
  
  if (filters.minRating) {
    allDests = allDests.filter(dest => dest.rating >= filters.minRating);
  }
  
  return allDests;
}

// Clear cache
function clearDataCache() {
  destinationsCache = null;
  categoryCountsCache = null;
  popularDestinationsCache = null;
  lastCategoryFilter = { category: null, result: null };
  categoryCountsInitialized = false;
}

// Other utility functions
function getAllCategories() {
  return categoriesData;
}

function getCategoryById(categoryId) {
  return categoryMap[categoryId] || null;
}

function getDistrictsData() {
  const districts = {};
  for (const district in destinationsData) {
    districts[district] = {
      count: destinationsData[district].length,
      name: getDistrictName(district)
    };
  }
  return districts;
}

// Auto-initialize - DIPERBAIKI
setTimeout(() => {
  console.log('📍 Modul Data Wisata Tangsel Dimuat');
  console.log('📊 Total destinasi:', getAllDestinations().length);
  console.log('🏷️ Total kategori:', getAllCategories().length);
  
  // Initialize category counts dengan delay lebih lama
  setTimeout(() => {
    initializeCategoryCounts();
  }, 1000);
}, 500);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    destinationsData,
    categoriesData,
    districtsData,
    getAllDestinations,
    getPopularDestinations,
    getDestinationsByDistrict,
    searchDestinations,
    filterDestinationsByCategory,
    filterDestinations,
    getDestinationsCountByCategory,
    getAllCategories,
    getCategoryById,
    getDistrictsData,
    getDistrictName,
    getCategoryName,
    getCategoryIcon,
    getRandomDestinations,
    getDestinationsByCategories,
    capitalizeFirst,
    initializeCategoryCounts,
    updateCategoryCountsDisplay,
    clearDataCache
  };
}
