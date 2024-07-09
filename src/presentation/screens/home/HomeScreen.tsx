import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScrollView } from 'react-native-gesture-handler';

import { useMovies } from '../../hooks/useMovies';
import PosterCarousel from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';


const HomeScreen = () => {

  const {top}=useSafeAreaInsets();

  const {isLoading, nowPlaying, popular, topTared, upcoming} = useMovies();

  if(isLoading) {
    return (<Text>Cargando...</Text>)
  }

  return (
    <ScrollView style={{marginTop: top+20, paddingBottom: 30}}>
      <View>
        {/* principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* pupular movies */}
        <HorizontalCarousel movies={popular} title='Popular'/>

        {/* Top rated */}
        <HorizontalCarousel movies={topTared} title='Top rated'/>

        {/* upcoming */}
        <HorizontalCarousel movies={upcoming} title='Upcoming'/>

      </View>
    </ScrollView>
  );
}

export default HomeScreen;
