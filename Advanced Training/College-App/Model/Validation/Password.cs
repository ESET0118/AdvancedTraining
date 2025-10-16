using System.ComponentModel.DataAnnotations;

public class StartsWithCapitalAttribute : ValidationAttribute
{
    // Constructor to set default error message
    public StartsWithCapitalAttribute()
    {
        ErrorMessage = "Password must start with a capital letter.";
    }

    // Step 2: Override the IsValid method
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value == null)
            return new ValidationResult("Password is required.");

        string password = value.ToString();

        // Check if the first character is uppercase
        if (!char.IsUpper(password[0]))
        {
            return new ValidationResult(ErrorMessage);
        }

        // ✅ Return Success if valid
        return ValidationResult.Success;
    }
}