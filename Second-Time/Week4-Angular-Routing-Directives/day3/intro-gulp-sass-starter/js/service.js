var germData = [
  {
    "Bacteria":"Aerobacter aerogenes",
    "Penicilin":870,
    "Streptomycin":1,
    "Neomycin":1.6,
    "Gram_Staining":"negative",
    "Genus": "other"
  },
  {
    "Bacteria":"Brucella abortus",
    "Penicilin":1,
    "Streptomycin":2,
    "Neomycin":0.02,
    "Gram_Staining":"negative",
    "Genus": "other"
  },
  {
    "Bacteria":"Brucella anthracis",
    "Penicilin":0.001,
    "Streptomycin":0.01,
    "Neomycin":0.007,
    "Gram_Staining":"positive",
    "Genus": "other"
  },
  {
    "Bacteria":"Diplococcus pneumoniae",
    "Penicilin":0.005,
    "Streptomycin":11,
    "Neomycin":10,
    "Gram_Staining":"positive",
    "Genus": "other"
  },
  {
    "Bacteria":"Escherichia coli",
    "Penicilin":100,
    "Streptomycin":0.4,
    "Neomycin":0.1,
    "Gram_Staining":"negative",
    "Genus": "other"
  },
  {
    "Bacteria":"Klebsiella pneumoniae",
    "Penicilin":850,
    "Streptomycin":1.2,
    "Neomycin":1,
    "Gram_Staining":"negative",
    "Genus": "other"
  },
  {
    "Bacteria":"Mycobacterium tuberculosis",
    "Penicilin":800,
    "Streptomycin":5,
    "Neomycin":2,
    "Gram_Staining":"negative",
    "Genus": "other"
  },
  {
    "Bacteria":"Proteus vulgaris",
    "Penicilin":3,
    "Streptomycin":0.1,
    "Neomycin":0.1,
    "Gram_Staining":"negative",
    "Genus": "other"
  },
  {
    "Bacteria":"Pseudomonas aeruginosa",
    "Penicilin":850,
    "Streptomycin":2,
    "Neomycin":0.4,
    "Gram_Staining":"negative",
    "Genus": "other"
  },
  {
    "Bacteria":"Salmonella (Eberthella) typhosa",
    "Penicilin":1,
    "Streptomycin":0.4,
    "Neomycin":0.008,
    "Gram_Staining":"negative",
    "Genus": "Salmonella"
  },
  {
    "Bacteria":"Salmonella schottmuelleri",
    "Penicilin":10,
    "Streptomycin":0.8,
    "Neomycin":0.09,
    "Gram_Staining":"negative",
    "Genus": "Salmonella"
  },
  {
    "Bacteria":"Staphylococcus albus",
    "Penicilin":0.007,
    "Streptomycin":0.1,
    "Neomycin":0.001,
    "Gram_Staining":"positive",
    "Genus": "Staphylococcus"
  },
  {
    "Bacteria":"Staphylococcus aureus",
    "Penicilin":0.03,
    "Streptomycin":0.03,
    "Neomycin":0.001,
    "Gram_Staining":"positive",
    "Genus": "Staphylococcus"
  },
  {
    "Bacteria":"Streptococcus fecalis",
    "Penicilin":1,
    "Streptomycin":1,
    "Neomycin":0.1,
    "Gram_Staining":"positive",
    "Genus": "Streptococcus"
  },
  {
    "Bacteria":"Streptococcus hemolyticus",
    "Penicilin":0.001,
    "Streptomycin":14,
    "Neomycin":10,
    "Gram_Staining":"positive",
    "Genus": "Streptococcus"
  },
  {
    "Bacteria":"Streptococcus viridans",
    "Penicilin":0.005,
    "Streptomycin":10,
    "Neomycin":40,
    "Gram_Staining":"positive",
    "Genus": "Streptococcus"
  }
];

angular.module("app").service("service", function(){
    this.getGerms = function(){
        return germData;
    }  
});