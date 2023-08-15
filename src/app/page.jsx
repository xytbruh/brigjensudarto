"use client";
import Content from "@/components/Content";
import { Input } from "@material-tailwind/react";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
export default function Home() {
  return (
    <>
      <Analytics />
      <Content>
        <div id="about" className="bg-[#ff5001] pb-5 lg:pb-0">
          <div className="max-w-[1280px] block lg:flex mx-auto justify-center items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/hero.png"
                width="400"
                height="400"
                priority
                alt="hero photo"
              />
            </div>
            <div className="mx-5">
              <div className="h-auto rounded-md shadow-md bg-white lg:w-[550px] w-full  text-black p-10 justify-center">
                <h1 className="font-bold pb-3 text-xl">
                  Berkarya, Bersatu, Sejahtera Bersama Sudarto untuk Lampung!
                </h1>
                <p className="text-sm tracking-wide">
                  Saya sebagai Purnawirwan TNI AD didalam jiwa raga saya sudah
                  tertanam &apos;Sumpah Prajurit & Sapta Marga&apos;,
                  diantaranya ada 2 hal yaitu -Setia kepada Negara Kesatuan
                  Republik Indonesia yg berdasarkan Pancasila & Undang-Undang
                  Dasar Republik Indonesia tahun 1945. - Membela kejujuran,
                  kebenaran & keadilan
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[1280px] my-20 block lg:flex mx-auto justify-center items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/profil1.png"
              priority
              width="400"
              height="400"
              alt="hero photo"
            />
          </div>
          <div className="mx-5">
            <div className="h-auto  lg:w-[550px] w-full  text-black p-10 justify-center">
              <h3 className="font-bold text-xl text-center lg:text-left">
                Brigjen (pur) Sudarto, S.IP
              </h3>
              <h6 className="uppercase opacity-60 text-sm text-center lg:text-left">
                CALON ANGGOTA DPR-RI LAMPUNG
              </h6>
              <hr className="border-gray-700 border-2 w-52 my-3 mx-auto lg:mx-0" />
              <p className=" text-sm tracking-wide">
                Dengan dilandasi jiwa raga saya seperti itu, sy mencermati
                kehidupan berbangsa & bernegara yg tdk baik-baik saja, nyata²
                banyak terjadi penyimpangan terhadap Pancasila & UUD 1945 serta
                banyak pejabat penyelenggara kenegaraan yg tidak jujur, tidak
                benar & tidak adil sehingga menyengsarakan kehidupan rakyat.
                Oleh karenanya disaat saya menikmati masa pensiun yg sudan
                nyaman ini, saya menjadi tidak bisa tinggal diam saja, jiwa raga
                saya terpanggil utk bangkit memperjuangkan tegaknya kejujuran,
                kebenaran & keadilan agar rakyat sebagai pemilik negara ini bisa
                menikmati hudup adil, makmur & sejahtera.
              </p>
              <button className="bg-[#ff5001] my-2 text-white text-xs p-2 rounded-md w-full lg:w-auto">
                Mohon Doa Dan Dukungannya
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[url('/overlay.png')] bg-no-repeat bg-center bg-cover relative py-20 mb-20">
          <div className="absolute top-0 left-0 pointer-events-none w-full h-full opacity-80  bg-[#ff5001]"></div>
          <div className="container mx-auto">
            <h1 className="text-center relative font-bold text-white text-3xl">
              3 Pilar Utama
            </h1>
            <div className="grid grid-cols-1">
              <ul className="list-none relative pl-0">
                <div className="w-[8px] h-full bg-black absolute left-[52px] top-0 overflow-hidden"></div>
                <li className="relative pt-[20px] pr-0 pb-[65px] pl-[145px]">
                  <h4 className="text-white font-semibold text-2xl mb-3">
                    Bersatu
                  </h4>

                  <p className="text-white">
                    Menjadi wakil rakyat yang mampu mempersatukan berbagai
                    kelompok masyarakat, tanpa memandang perbedaan dan
                    kepentingan pribadi, untuk mencapai kemajuan bersama.
                  </p>

                  <div className="absolute left-0 top-0 w-28 h-28 flex justify-center items-center bg-black rounded-[50%] z-[1] transition-all duration-100">
                    <div className="w-20 h-20 border-4 rounded-[50%] z-[1] "></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1">
              <ul className="list-none relative pl-0">
                <div className="w-[8px] h-full bg-black absolute left-[52px] top-0 overflow-hidden"></div>
                <li className="relative pt-[20px] pr-0 pb-[65px] pl-[145px]">
                  <h4 className="text-white font-semibold text-2xl mb-3">
                    Berkarya
                  </h4>

                  <p className="text-white">
                    Melakukan tindakan nyata dan konstruktif dalam dunia
                    legislatif untuk menciptakan kebijakan yang berdampak
                    positif bagi masyarakat, dengan terus bekerja keras dan
                    berdedikasi.
                  </p>

                  <div className="absolute left-0 top-0 w-28 h-28 flex justify-center items-center bg-black rounded-[50%] z-[1] transition-all duration-100">
                    <div className="w-20 h-20 border-4 rounded-[50%] z-[1] "></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1">
              <ul className="list-none relative pl-0">
                <li className="relative pt-[20px] pr-0 pb-[65px] pl-[145px]">
                  <h4 className="text-white font-semibold text-2xl mb-3">
                    Sejahtera
                  </h4>

                  <p className="text-white">
                    Membangun masyarakat yang sejahtera melalui usulan,
                    pengusulan, dan pengawalan terhadap program-program
                    pembangunan yang bertujuan meningkatkan kualitas hidup dan
                    kesejahteraan rakyat secara menyeluruh.
                  </p>

                  <div className="absolute left-0 top-0 w-28 h-28 flex justify-center items-center bg-black rounded-[50%] z-[1] transition-all duration-100">
                    <div className="w-20 h-20 border-4 rounded-[50%] z-[1] "></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1280px] p-12">
          <h1 className="text-center text-black text-2xl font-bold">
            Keorganisasian
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-6">
            <div className="shadow-md bg-black text-white rounded-lg p-4">
              <p className="mb-3 text-xs lg:text-sm opacity-70">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
                voluptate illo vero, ipsum laboriosam magni repudiandae,
                cupiditate rerum recusandae repellat rem error, voluptatibus sit
                consequuntur porro eveniet. Voluptatibus, et nisi.
              </p>
              <span className="font-bold">Lorem</span>
            </div>
            <div className="shadow-md bg-black text-white rounded-lg p-4">
              <p className="mb-3 text-xs lg:text-sm opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                iste quisquam at illo, veniam, quod tempora sed nam, voluptatem
                labore quis vero expedita ipsum aliquam mollitia molestias ad.
                Et, enim.
              </p>
              <span className="font-bold">lorem</span>
            </div>
            <div className="shadow-md bg-black text-white rounded-lg p-4">
              <p className="mb-3 text-xs lg:text-sm opacity-70">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                recusandae corporis, possimus, voluptatem esse expedita
                laboriosam maiores dolore quidem non ut unde nam, doloremque
                voluptates deserunt ratione tempore nemo quos!
              </p>
              <span className="font-bold">lorem</span>
            </div>
          </div>
        </div>

        <div className="bg-black">
          <div className="mx-auto max-w-[1280px] p-8">
            <h1 className="text-center text-white text-2xl font-bold">
              Apa Kata Pendukung Saya
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-6">
              <div className="shadow-md bg-gray-200 rounded-lg p-4">
                <p className="mb-3 text-xs lg:text-sm opacity-70">
                  Kami butuh profile yang memiliki kemampuan berpikir, berbuat,
                  adil, berhati nurani lembut dan baik, berani terdepan membela
                  setiap desakan dan aksi kezaliman, beriman, bertakwa,
                  membangun kebersamaan tanpa ada perbedaan agama, warna,
                  politik, komunitas, suku dan ras.
                </p>
                <span className="font-bold">Masyarakat</span>
              </div>
              <div className="shadow-md bg-gray-200 rounded-lg p-4">
                <p className="mb-3 text-xs lg:text-sm opacity-70">
                  Terima kasih, Bapak Selamat, atas dedikasi dan komitmen Anda
                  untuk mewakili aspirasi masyarakat. Saya yakin Anda memiliki
                  visi yang kuat untuk memajukan Provinsi ini. Semoga Anda
                  terpilih sebagai anggota DPR Provinsi yang berpengaruh dan
                  berintegritas.
                </p>
                <span className="font-bold">Masyarakat</span>
              </div>
              <div className="shadow-md bg-gray-200 rounded-lg p-4">
                <p className="mb-3 text-xs lg:text-sm opacity-70">
                  Bapak Selamat, saya sangat mengapresiasi keberanian dan
                  semangat Anda dalam berjuang demi kepentingan rakyat. Dukungan
                  saya sepenuhnya untuk Anda dalam pencapaian tujuan dan agenda
                  yang Anda usung. Semoga menjadi suara rakyat yang lantang di
                  DPR Provinsi!
                </p>
                <span className="font-bold">Masyarakat</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="col-span-2 bg-[#ff5001] p-12 rounded-md ">
              <Image
                height="50"
                width="50"
                src="/logo.png"
                className="mx-auto"
                alt="Logo"
              />
              <h5 className="text-center font-semibold text-white text-2xl mb-2">
                Jadilah Pendukung saya!!
              </h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1">
                  <Input
                    type="text"
                    placeholder="Nama"
                    className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <Input
                    type="text"
                    placeholder="No Telephone"
                    className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />
                </div>
                <div className="col-span-2">
                  <Input
                    type="text"
                    placeholder="Umur"
                    className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />{" "}
                </div>
                <div className="col-span-2">
                  <Input
                    type="text"
                    placeholder="Alamat"
                    className="!border !border-blue-gray-50 bg-white text-blue-gray-500 shadow-lg shadow-blue-gray-900/5 ring-4 ring-transparent placeholder:text-blue-gray-200 focus:!border-blue-500 focus:!border-t-blue-500 focus:ring-blue-500/20"
                    labelProps={{
                      className: "hidden",
                    }}
                    containerProps={{ className: "min-w-[100px]" }}
                  />{" "}
                </div>
                <div className="col-span-2">
                  <button className="bg-black text-[#ff5001] w-full py-6 rounded-md">
                    Dukung
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-black col-span-2 lg:col-span-1 rounded-md p-10">
              <div className="text-white">
                <h3 className="font-semibold">No Telephone</h3>
                <p className="text-sm my-3">01289798236</p>
                <hr className="border-gray-700 border-2 w-52  " />
              </div>
              <div className="text-white my-4">
                <h3 className="font-semibold">Email</h3>
                <p className="text-sm my-3">mailto.alali@gmail.com</p>
                <hr className="border-gray-700 border-2 w-52  " />
              </div>
              <div className="text-white">
                <h3 className="font-semibold">Alamat</h3>
                <p className="text-sm my-3">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nihil est blanditiis, minima mollitia a dolorum
                </p>
                <hr className="border-gray-700 border-2 w-52  " />
              </div>
              <div className="text-white my-4">
                <h3 className="font-semibold">Website Url</h3>
                <p className="text-sm my-3">https://alali.id</p>
                <hr className="border-gray-700 border-2 w-52  " />
              </div>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
}
