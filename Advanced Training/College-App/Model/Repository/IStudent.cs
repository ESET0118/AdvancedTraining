using College_App.Data;

namespace College_App.Model.Repository
{
    public interface IStudent
    {
        Task<IEnumerable<Student>> getAll();
    }
}
