export default class ActorData {

    constructor(fName, lName, bDate, imgLink, imdbLink) {
      
      this.fName = fName;
      this.lName = fName;
      this.bDate = bDate;
      this.imgLink = imgLink;
      this.imdbLink = imdbLink;
      
    }
    ageInYears() {
        const currentYear = new Date().getFullYear();
        const birthDate = new Date(this.bDate);
        var age = currentYear - birthDate.getFullYear();
        return(age);
    }
}