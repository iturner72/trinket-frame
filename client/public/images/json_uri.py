import json
import base64

def images_to_data_uri_json(image_paths, output_json_file):
    data_uris = {}
    for image_path in image_paths:
        # Determine the image MIME type
        mime_type = "image/jpeg"  # Default to JPEG
        if image_path.lower().endswith(".png"):
            mime_type = "image/png"
        elif image_path.lower().endswith(".gif"):
            mime_type = "image/gif"
        
        # Read and encode the image
        with open(image_path, "rb") as image_file:
            encoded_string = base64.b64encode(image_file.read()).decode()
        
        # Construct the data URI
        data_uri = f"data:{mime_type};base64,{encoded_string}"
        
        # Use the filename (without extension) as the key
        key = image_path.split('/')[-1].split('.')[0]
        data_uris[key] = data_uri

    # Write the dictionary to a JSON file
    with open(output_json_file, 'w') as outfile:
        json.dump(data_uris, outfile, indent=4)

# Example usage
image_paths = ["./trinket1_small.jpg", "./trinket2_small.jpg", "./trinket3_small.jpg", "./trinket4_small.jpg", "./trinket5_small.jpg", "./trinket6_small.jpg", "./trinket7_small.jpg", "./trinket8_small.jpg"]  # Add more paths as needed
output_json_file = "data_uris_small.json"
images_to_data_uri_json(image_paths, output_json_file)

