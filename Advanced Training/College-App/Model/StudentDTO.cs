using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace College_App.Model
{
    public class StudentDTO
    {
        //[Required]
        public int studentID { get; set; }
        public string name { get; set; }
        [EmailAddress(ErrorMessage ="Please write a valid email Id")]
            public string email { get; set; }
        [Range(0,100)]
            public int age { get; set; }
        //[StartsWithCapital(ErrorMessage ="I win")]
        //public string password { get; set; }
        //[Compare(nameof(password))]
        //public string confirmPassword { get; set; }

    }
}
