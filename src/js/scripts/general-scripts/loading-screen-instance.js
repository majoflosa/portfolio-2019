import LoadingScreen from '../../lib/loading-screen';

export default function createLoadingScreen() {

    const environment = process.env.NODE_ENV || 'production';
    if ( environment === 'development' ) 
        return document.body.removeChild( document.querySelector( '#loading-screen' ) );
    
    const loadingScreen = new LoadingScreen( '#loading-screen' );

}
