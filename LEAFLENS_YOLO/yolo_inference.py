from ultralytics import YOLO 
import torch
model = YOLO('yolov8x')
print(torch.cuda.is_available())
device = 'cuda' if torch.cuda.is_available() else 'cpu'
model.model.to(device)
model.predict('input_photos/tree.jpg',save=True )