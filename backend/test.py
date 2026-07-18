from pathlib import Path
from PIL import Image
import sys

if len(sys.argv) < 2:
    sys.exit(1)

file_path = Path(sys.argv[-1])

if not file_path:
    print("No file selected. Exiting...")
elif not file_path.is_file():
    sys.exit(1)
else:
    file = Path(file_path)
    
    new_filename = f"{file.stem}.webp"
    current_path = Path(".") / new_filename

    try:
        image = Image.open(file)
        
        if image.mode != "RGBA":
            image = image.convert("RGB")
            
        image.save(
            current_path, 
            "WEBP",
            quality=90,
            method=6,
            lossless=False
        )
        print(f"✅ Successfully optimized and saved as: {current_path.name}")
        
    except Exception as e:
        print(f"❌ Error processing image: {e}")