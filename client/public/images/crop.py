from PIL import Image
import os

input_directory = './'
output_directory = './cropped'

crop_box = (545, 165, 1385, 944)

if not os.path.exists(output_directory):
    os.makedirs(output_directory)

for filename in os.listdir(input_directory):
    if filename.endswith((".png", ".jpg")):
        image_path = os.path.join(input_directory, filename)
        with Image.open(image_path) as img:
            cropped_image = img.crop(crop_box)

            cropped_image.save(os.path.join(output_directory, filename))
            print(f"Cropped and saved {filename}")

print("Done cropping images.")
