"use client";

const PastRecruiters = () => {
  const logos = [
    "https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?t=st=1734340976~exp=1734344576~hmac=b62c1f0afb72a3abc663d89361c0abaaf24922d01ca16ec4fbca76fa0759e3e0&w=740",
    "https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?t=st=1734341024~exp=1734344624~hmac=054459dd8b0af53213620987ef65e3e29644d6326be38b9efae0b688a33eb1a3&w=740",
    "https://img.freepik.com/free-vector/triangle-natural-logo-design-template-branding-corporate-identity_25819-653.jpg?t=st=1734341046~exp=1734344646~hmac=941a1ad3764be7e592b928e071aea232bcd72e53cf765e993dd0e289ad3c522e&w=740",
    "https://img.freepik.com/free-vector/creative-colorful-fox-gradient-icon-logo-design_474888-3235.jpg?t=st=1734341133~exp=1734344733~hmac=99452deeb7200298344683b4a75e78246fbc194d8ac040c3ec04624c338753a4&w=740",
    "https://img.freepik.com/free-vector/letter-colorful-gradient-logo-design_474888-2226.jpg?t=st=1734341148~exp=1734344748~hmac=3cbb60e9309e6daf81f60d7d731305bc84db9f3861a2c65dbc11b9ba451d7048&w=740",
    "https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?t=st=1734343125~exp=1734346725~hmac=470c2850ca11a7ec59b5967c9d7e69543a44cdc6cc85f02c70a889e42da02a28&w=740",
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Past Recruiters</h2>
      <div className="grid grid-cols-3 gap-0 w-full max-w-xl">
        {logos.slice(0, 6).map((logo, index) => (
          <div
            key={index}
            className="relative overflow-hidden w-full h-48 border border-gray-300"
          >
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300 hover:filter hover:grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastRecruiters;


