class Candidato {
    constructor() {
      this.nombre = "";
      this.partido = "";
      this.nombrePartido = "";
      this.logoPartido = "";
      this.fotoCandidato = "";
      this.candidatos = {
        "candidatos": [
            {
                "id": 1,
                "nombre": "Luisa Gonzalez",
                "partido": "Alianza País",
                "nombrePartido": "Alianza País",
                "logoPartido": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/%C3%8Dcono_de_Alianza_PAIS_%28cuadrado%29.svg/1200px-%C3%8Dcono_de_Alianza_PAIS_%28cuadrado%29.svg.png",
                "fotoCandidato": "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/354662482_725420509591827_2033603551780733937_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeFMdBmA6XC_wpaZtIX3ccBi5U1vXQvhRVTlTW9dC-FFVH5BZ1EthCxFE1p1iTsi3Z9wWhLrgRrs0yMxFRa1DeyG&_nc_ohc=_3pZV61GHqYAX89Lk6U&_nc_ht=scontent.fuio13-1.fna&oh=00_AfDTOLI6AwAniI7ZEOcaQ2SrfteYSnjOnOchdfpXiIQoJQ&oe=65E5705F",
            },
            {
                "id": 2,
                "nombre": "Guillermo Lasso",
                "partido": "CREO",
                "nombrePartido": "CREO",
                "logoPartido": "https://creostorage.blob.core.windows.net/uploads/2014/07/CREO2020-144.png",
                "fotoCandidato": "https://www.vistazo.com/binrepository/450x450/0c0/450d450/none/12727/YWMJ/guillermo-lasso-creo_2233_20210425233305.jpg",
            },
            {
                "id": 3,
                "nombre": "Andrés Arauz",
                "partido": "Unión por la Esperanza",
                "nombrePartido": "Unión por la Esperanza",
                "logoPartido": "https://pbs.twimg.com/profile_images/1472703577655328768/7URFf1UE_400x400.jpg",
                "fotoCandidato": "https://upload.wikimedia.org/wikipedia/commons/d/de/Econ._Andr%C3%A9s_Arauz.jpg",
            },
            {
                "id": 4,
                "nombre": "Yaku Pérez",
                "partido": "Pachakutik",
                "nombrePartido": "Pachakutik",
                "logoPartido": "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/251214138_249931907179279_5781881664095309971_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeF-cjUL43rjLTw-MJdXJILteQEjvJq3EoF5ASO8mrcSgaTh7hHqmLFCAvcL9DnallE8l_nWol8JK6XJte1vfFvM&_nc_ohc=erYKDqjjTe4AX95yA62&_nc_ht=scontent.fuio13-1.fna&oh=00_AfAIGLZXcx9SoRivkNpG-f6msBih_CyxXdeW7zH-WGFIFA&oe=65E56F6A",
                "fotoCandidato": "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/361845729_825059868986486_974173181975792588_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHAevqUkyZB3yb8iZFEk6UxiD8hLjUFqueIPyEuNQWq59m87VhYk8-XuZrH-Q_OqxZLNtFSyRYeLTZCvCzuDi9M&_nc_ohc=p-NeRsK9VfAAX9JUwi7&_nc_ht=scontent.fuio13-1.fna&oh=00_AfBGrkTcHgDCDLPlpB_F7mlVGFZFd3sQ0D2BvyPcg8_oEA&oe=65E664B3",
            },
            {
                "id": 5,
                "nombre": "Jaime Nebot",
                "partido": "Partido Social Cristiano",
                "nombrePartido": "Partido Social Cristiano",
                "logoPartido": "https://scontent.fuio13-1.fna.fbcdn.net/v/t1.6435-9/53172764_251708569045704_2404209674531373056_n.png?_nc_cat=105&ccb=1-7&_nc_sid=be3454&_nc_eui2=AeGF0JN8OD8gfvSvIQAMtLrXMJOkZjp_ASowk6RmOn8BKn93Aab6lLYbXetQyT94Dq2s0bl6iWzFaiE9LYhfKsAm&_nc_ohc=uPsHeGtqKWQAX9wK7ct&_nc_ht=scontent.fuio13-1.fna&oh=00_AfCGwDcOVWSHkEE8NyY_BOMUzrpsq9C68luZ7QwsmjsDhQ&oe=660813F6",
                "fotoCandidato": "https://scontent.fuio13-1.fna.fbcdn.net/v/t39.30808-6/251214138_249931907179279_5781881664095309971_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeF-cjUL43rjLTw-MJdXJILteQEjvJq3EoF5ASO8mrcSgaTh7hHqmLFCAvcL9DnallE8l_nWol8JK6XJte1vfFvM&_nc_ohc=erYKDqjjTe4AX95yA62&_nc_ht=scontent.fuio13-1.fna&oh=00_AfAIGLZXcx9SoRivkNpG-f6msBih_CyxXdeW7zH-WGFIFA&oe=65E56F6A",
            },
            {
                "id": 6,
                "nombre": "Lucio Gutiérrez",
                "partido": "Partido Sociedad Patriótica",
                "nombrePartido": "Partido Sociedad Patriótica",
                "logoPartido": "https://upload.wikimedia.org/wikipedia/commons/f/f6/Logo_-_Partido_Sociedad_Patri%C3%B3tica.png",
                "fotoCandidato": "https://especiales.eluniverso.com/elecciones2017/files/2017/01/Lucio-Gutierrez-Borbua.jpg",
            },                
        ]
      };
    }

}

module.exports = Candidato;