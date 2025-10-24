
namespace College_App.Model
{
    public class collegeRepository
    {
        public static List<College_App.Data.Student> students { get; set; } = new List<College_App.Data.Student>(){ new College_App.Data.Student
       {
           studentID = 1,
           name = "Test",
           email = "shivam@gmail.com"
       },

       new College_App.Data.Student {

           studentID = 2,
           name = "Test",
           email = "dsckjbdsc"
       }

   };
    }
}
