import base64

def image_to_data_uri(image_path, output_file):
    """
    Converts an image to a data URI and saves it to a file.
    
    Args:
    - image_path (str): The path to the image file.
    - output_file (str): The path to the output file where the data URI will be saved.
    """
    # Determine the image MIME type based on the file extension
    mime_type = "image/jpeg"  # Default to JPEG
    if image_path.lower().endswith(".png"):
        mime_type = "image/png"
    elif image_path.lower().endswith(".gif"):
        mime_type = "image/gif"
    
    # Read the image file and encode it in base64
    with open(image_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode()

    # Construct the data URI
    data_uri = f"data:{mime_type};base64,{encoded_string}"
    
    # Write the data URI to the specified output file
    with open(output_file, "w") as file:
        file.write(data_uri)

# Example usage
image_path = "./trinket8.png"
output_file = "./out_uri/trinket8.txt"
image_to_data_uri(image_path, output_file)

