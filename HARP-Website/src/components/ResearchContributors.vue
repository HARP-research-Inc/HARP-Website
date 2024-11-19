<template>
    <div class="contributors">
        <div class="contributors-authors">
            <h3>Authors</h3>
            <p>Paul DiMaggio, Eszter Hargittai, W. Russell Neuman, and John P. Robinson</p>    
        </div>
        <div class="contributors-citations">
            <h3>Citations</h3>
            <ol>
                <li><a href="">Abbate J. 1999. Inventing the Internet. Cambridge, MA: MIT Press [Google Scholar]</a></li>
                <li><a href="">Agre P. 1998a. The Internet and public discourse.. First Monday 3. http://www.firstmondaydk/issues/issue3_3/agre/index.html</a></li>
                <li><a href="">Agre P. 1998b. Presentation in Proceeding of a Congressional Breakfast Seminar on Information Technology and Social Change 14–19 Washington, DC: Consortium of Soc. Sci. Assoc</a></li>
                <li><a href="">Ahuja MK, Carley KM. 1998. Network structure in virtual organizations.. J. Computer-Mediated Commun. http://www.ascusc.org/jcmc/vol3/issue4/ahuja.html</a></li>
                <li><a href="">Aldrich H. 1999. Organizations Evolving. Beverly Hills, CA: Sage [Google Scholar]</a></li>
                <li><a href="">Aldrich H. 1999. Organizations Evolving. Beverly Hills, CA: Sage [Google Scholar]</a></li>
            </ol>
        </div>
        <p>View Citations ></p>
    </div>
</template>

<script setup>
</script> 

<style lang="css" scoped>
.contributors {
    background-color: #222222;
    width: 85%;
    height: auto;
    padding: 4rem;
    margin: 0;
    text-align: left;
    border-radius: 2rem;
    margin-bottom: 6rem;
}

.contributors h3 {
    font-weight: bold;
}

.contributors-authors,
.contributors-citations {
    margin-bottom: 2rem;
}

.contributors a {
    color: inherit;
    text-decoration: underline;
}

.contributors a:visited {
    color: inherit; 
    text-decoration: underline;
}

/* Media Queries for Responsive Design */
@media (max-width: 1200px) {
    .contributors {
        width: 90%;
        padding: 3rem;
    }

    .contributors h3 {
        font-size: 1.5rem;
    }

    .contributors-authors,
    .contributors-citations {
        margin-bottom: 1.5rem;
    }

    .contributors p {
        font-size: 0.9rem;
    }
}

@media (max-width: 768px) {
    .contributors {
        width: 100%;
        padding: 2rem;
        margin-bottom: 4rem;
    }

    .contributors h3 {
        font-size: 1.3rem;
    }

    .contributors-authors,
    .contributors-citations {
        margin-bottom: 1.5rem;
    }

    .contributors p {
        font-size: 0.9rem;
        text-align: center;  /* Center text for smaller screens */
    }

    .contributors a {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .contributors {
        padding: 1.5rem;
        margin-bottom: 3rem;
    }

    .contributors h3 {
        font-size: 1.2rem;
    }

    .contributors-authors,
    .contributors-citations {
        margin-bottom: 1rem;
    }

    .contributors p {
        font-size: 0.85rem;
        text-align: center;
    }

    .contributors a {
        font-size: 0.85rem;
    }
}
</style>
