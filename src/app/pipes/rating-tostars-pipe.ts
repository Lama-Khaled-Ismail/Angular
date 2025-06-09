import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingTostars',
  standalone: false
})
export class RatingTostarsPipe implements PipeTransform {

  transform(rating: number): { full: boolean; half: boolean; empty: boolean }[] {
      console.log(rating);
      const stars: { full: boolean; half: boolean; empty: boolean }[] = [];

      
      const fullStars = Math.floor(rating); 
      const hasHalfStar = rating % 1 >= 0.5; 
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

      
      for (let i = 0; i < fullStars; i++) {
        stars.push({ full: true, half: false, empty: false });
      }

      
      if (hasHalfStar) {
        stars.push({ full: false, half: true, empty: false });
      }

      
      for (let i = 0; i < emptyStars; i++) {
        stars.push({ full: false, half: false, empty: true });
      }
      console.log(stars);
      return stars;
  }

}
