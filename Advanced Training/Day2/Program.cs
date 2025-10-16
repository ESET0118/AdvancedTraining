namespace Day2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Book book = new Book();
            book.DisplayBookDetails();

            //Console.WriteLine();
            //Console.Clear();

            Movie movie = new Movie();
            movie.DisplayAvailableSeats();

            //Console.WriteLine();
            //Console.Clear();


            Company.DisplayCompanyName();

            //Console.WriteLine();
            //Console.Clear();

            Employee emp = new Employee();
            emp.CalculateSalary();


        }
    }
}

public class Book
{
    public int bookId;
    public string title, author;
    public bool isIssued;

    public Book()
    {
        bookId = 0;
        title = author = "";
        isIssued = false;
    }
    public void IssueBook()
    {
        isIssued = true;
    }
    public void ReturnBook()
    {
        isIssued = false;
    }
    public void DisplayBookDetails()
    {
        Console.WriteLine($"Book ID: {bookId}\nTitle: {title}\nAuthor: {author}\nIs Issued: {isIssued}");
    }
}

public class Movie
{
    public string movieName;
    public int totalSeats, bookedSeats;

    public Movie()
    {
        movieName = "";
        totalSeats = bookedSeats = 0;
    }
    public void BookSeats(int seats)
    {
        if(seats<=totalSeats)
            bookedSeats = seats;
    }
    public void CancelSeats(int seats)
    {
        bookedSeats -= seats;
    }
    public void DisplayAvailableSeats()
    {
        Console.WriteLine($"Available Seats: {totalSeats - bookedSeats}");
    }
}

public class Company
{
    public string employeeName;
    public int employeeId;

    public static string companyName="Esyasoft";

    public Company()
    {
        employeeName = "";
        employeeId = 0;
    }

    public static void DisplayCompanyName()
    {
        Console.WriteLine($"Company Name: {companyName}");
    }
}

public class Employee
{
    public int id;
    public string name;
    public double basicSalary,hra,da,grossSalary;
    public Employee()
    {
        id = 0;
        name = "";
        basicSalary = 0;
    }
    public void CalculateSalary()
    {
        hra = 0.1 * basicSalary;
        da = 0.05 * basicSalary;
        grossSalary = basicSalary + hra + da;
    }
}

