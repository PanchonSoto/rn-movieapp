import { RootStackParams } from '../../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';

import { useMovie } from '../../hooks/useMovie';

import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { MovieHeader } from '../../components/movie/MovieHeader';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};


export const DetailsScreen = ({route}:Props) => {
  
  const {movieId} = route.params;

  const {isLoading, movie, cast=[]} = useMovie(movieId);
  
  if(isLoading) {
    return (<FullScreenLoader/>)
  }

  return (
    <ScrollView>
        <View>
          <MovieHeader
          originalTitle={movie!.originalTitle}
          poster={movie!.poster}
          title={movie!.title}
          />

          <MovieDetails movie={movie!} cast={cast}/>
        </View>
    </ScrollView>
  );
}

