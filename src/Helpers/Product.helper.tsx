export const productRatingColor = (rating: number) => {
    let badgeColor: string = 'success'

    if (rating < 4 && rating > 2) {
      badgeColor = 'warning'
      return badgeColor
    }

    if (rating < 2) {
      badgeColor = 'error'
      return badgeColor
    }
    return badgeColor
  }