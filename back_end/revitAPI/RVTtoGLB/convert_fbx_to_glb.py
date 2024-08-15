
import bpy

input_fbx = "/Users/rahilshaik/parch/revitAPI/RVTtoGLB/BLDG_BYATL-2088McKinleyRdADU_detached-3DView-FROMDRIVEWAY.fbx"
output_glb = "/Users/rahilshaik/parch/revitAPI/RVTtoGLB/BLDG_BYATL-2088McKinleyRdADU_detached-3DView-FROMDRIVEWAY.glb"

bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.import_scene.fbx(filepath=input_fbx)
bpy.ops.export_scene.gltf(filepath=output_glb, export_format='GLB')
