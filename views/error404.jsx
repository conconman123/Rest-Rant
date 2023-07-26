const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Opps, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/404cat.jpg" alt="cat" />
                    <div>
                        Photo by <a href="https://unsplash.com/@soberanes">Uriel Soberanes</a> on <a href="https://unsplash.com/photos/xadzcCQZ_Xc">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404