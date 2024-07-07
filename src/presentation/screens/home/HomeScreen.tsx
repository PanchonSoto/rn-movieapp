import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScrollView } from 'react-native-gesture-handler';

import { useMovies } from '../../hooks/useMovies';
import PosterCarousel from '../../components/movies/PosterCarousel';
import HorizontalCarousel from '../../components/movies/HorizontalCarousel';


const HomeScreen = () => {

  const {top}=useSafeAreaInsets();

  const {isLoading, nowPlaying} = useMovies();

  if(isLoading) {
    return (<Text>Cargando...</Text>)
  }

  return (
    <ScrollView style={{marginTop: top+20, paddingBottom: 30}}>
      <View>
        {/* principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* pupular movies */}
        <HorizontalCarousel />

      </View>
    </ScrollView>
  );
}

export default HomeScreen;
