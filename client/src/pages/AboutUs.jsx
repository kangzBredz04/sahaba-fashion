/* eslint-disable react/no-unescaped-entities */
export default function AboutUs() {
  return (
    <div className="flex flex-col gap-5 py-5 bg-white">
      <h1 className="text-center font-bold tracking-widest text-2xl">
        TENTANG KAMI
      </h1>
      <div className="w-3/4 m-auto">
        <p className="text-center leading-relaxed">
          Sahaba Fashion merupakan Brand fashion pria, yang menghadirkan
          produk-produk Essential Modern Muslimwear dengan look Smart & Stylish,
          bagi masyarakat urban muslim di Indonesia.
        </p>
      </div>
      <div className="flex gap-10 px-7 py-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-wide">Overview</h1>
          <p className="text-lg leading-loose">
            Sahaba Fashion adalah destinasi daring yang menawarkan koleksi
            pakaian muslim pria serta berbagai aksesoris untuk melengkapi gaya
            hidup muslim modern. Dengan fokus pada kualitas, gaya, dan kepatuhan
            terhadap nilai-nilai Islam, Sahaba Fashion menyediakan berbagai
            pilihan produk untuk memenuhi kebutuhan fashion dan gaya hidup pria
            muslim.
          </p>
        </div>
        <img
          src="https://fadkhera.com/wp-content/uploads/2023/07/Koko-Modern-Jabir-Long.webp"
          alt="Gambar"
          className="w-5/12"
        />
      </div>
      <div className="flex gap-10 px-7 py-10">
        <img
          src="https://fadkhera.com/wp-content/uploads/2024/01/koko-modern-ansar-navy-long-5.webp"
          alt="Gambar"
          className="w-5/12"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold tracking-wide">History Brand</h1>
          <p className="text-lg leading-loose">
            Sahaba Fashion adalah sebuah merek yang terinspirasi oleh kata
            "Sahaba" yang berasal dari bahasa Arab. Kata "Sahaba" secara harfiah
            berarti "teman" atau "sahabat". Dalam konteks Islam, istilah ini
            merujuk kepada para sahabat Nabi Muhammad SAW, yaitu orang-orang
            yang hidup bersama dan mendukung beliau dalam misi penyebaran agama
            Islam.
          </p>
          <p className="text-lg leading-loose">
            Dengan nama yang mengandung makna yang dalam ini, Sahaba Fashion
            menghadirkan produk-produk fashion muslim yang tidak hanya mengikuti
            tren, tetapi juga mempromosikan nilai-nilai universal seperti
            kesederhanaan, keramahan, dan persatuan.
          </p>
          <p className="text-lg leading-loose">
            Sebagai bagian dari perjalanan sejarah Islam yang kaya, Sahaba
            Fashion mengajak individu untuk menghargai warisan dan tradisi Islam
            melalui gaya dan mode yang modern. Dengan demikian, setiap produk
            dari Sahaba Fashion bukan hanya sekadar pakaian, tetapi juga sebuah
            pernyataan tentang identitas, kebanggaan, dan kepercayaan.
          </p>
        </div>
      </div>
    </div>
  );
}
