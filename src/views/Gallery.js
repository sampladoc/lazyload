import React from 'react';
import { useGet } from '../hooks/useGet'
import LazyLoad from 'react-lazyload';
import loadingImage2 from '../assets/loader.gif';

const styles = {
    imgBg: {
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#2f2f2",
        marginTop: 20,
        width:"80%",
        marginLeft: "10%"
    }

}

const Loader = () => (
    <div>
        <img src={loadingImage2} height={200} />
    </div>
)


function Gallery({ images }) {
    const [imgs, setImgs] = React.useState()
    const [next, setNext] = React.useState()

    images = useGet("pokemon-form/?limit=0&offset=20")

    const getImages = (() => {
        images.res && images.res.length > 0 ?
            setImgs(images.res) :
            console.log("Not Loaded")
        images.res && images.res.length > 0 ?
            setNext(images.next) :
            console.log("Not Loaded 2")
    })
    !imgs && getImages()
    return (
        <div >
            {imgs && imgs.length > 0 && imgs.map((image) => (
                <LazyLoad  once={false} key={image.id} offset={[-200, 0]} placeholder={<Loader />} debounce={500} style={styles.imgBg}>
                    <img src={image.src} height={200} />
                </LazyLoad>
            ))}
        </div>
    )
}

export default Gallery;