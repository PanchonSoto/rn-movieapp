import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { ScrollView } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'>{};


export const DetailsScreen = ({route}:Props) => {
  
  const {movieId} = route.params;

  const {isLoading, movie, cast=[]} = useMovie(movieId);
  
  if(isLoading){
    return <Text>Loading</Text>
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

