import Movies from "@/components/Movies";
import React from "react";

const Page = async ({ params }) => {
  const keyword = params.keyword;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=9472c1785e4800bbf7eace84fd9c82a9&query=${keyword}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  console.log(data);

  return (
    <div>
      {!data?.results ? (
        <div className="p-5 text-gray-300">Aranilan sey bulunamadi!!</div>
      ) : (
        <div className="flex items-center flex-wrap gap-3">
          {data?.results?.map((dt, i) => (
            <Movies key={i} dt={dt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
