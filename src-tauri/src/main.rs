// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use std::{fs, path::PathBuf};
use xml2json_rs::{JsonBuilder, JsonConfig};

use walkdir::WalkDir;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn get_game_lists(path: String) -> Vec<(PathBuf, String)> {
    let mut lists: Vec<(PathBuf, String)> = vec![];
    let json_builder = JsonConfig::new().explicit_array(false).finalize();

    for entry in WalkDir::new(path)
        .follow_links(true)
        .into_iter()
        .filter_map(|e| e.ok())
    {
        let f_name = entry.file_name().to_string_lossy();
        if f_name.eq("gamelist.xml") {
            let path = entry.path();

            let contents = fs::read_to_string(entry.path()).unwrap();
            let json = json_builder.build_string_from_xml(&contents).unwrap();
            let media_link = fs::canonicalize(&path).unwrap();

            lists.push((media_link.parent().unwrap().to_path_buf(), json));
        }
    }

    return lists;
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_store::Builder::default().build())
        .invoke_handler(tauri::generate_handler![get_game_lists])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
