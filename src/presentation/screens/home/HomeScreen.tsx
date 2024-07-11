import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ScrollView } from 'react-native-gesture-handler';

import { useMovies } from '../../hooks/useMovies';
import PosterCarousel from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';


const HomeScreen = () => {

  const {top}=useSafeAreaInsets();

  const {isLoading, nowPlaying, popular, topTared, upcoming, popularNextPage} = useMovies();

  if(isLoading) {
    return (<FullScreenLoader/>)
  }

  return (
    <ScrollView style={{marginTop: top+20, paddingBottom: 30}}>
      <View>
        {/* principal */}
        <PosterCarousel movies={nowPlaying} />

        {/* pupular movies */}
        <HorizontalCarousel 
          movies={popular} title='Popular'
          loadNextPage={popularNextPage}
        />

        {/* Top rated */}
        <HorizontalCarousel movies={topTared} title='Top rated'/>

        {/* upcoming */}
        <HorizontalCarousel movies={upcoming} title='Upcoming'/>

      </View>
    </ScrollView>
  );
}

export default HomeScreen;
