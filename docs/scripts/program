//
// Created by Savtis on 15.10.2024.
//

#include <fstream>
#include <utility>
#include <iostream>
#include <string>

#include "files.hpp"

namespace CupMark {

    using std::filesystem::path;

    path input_path = path();
    path output_path = path();

    bool is_inited = false;

    std::filesystem::path generate_path2out(std::filesystem::path input) {
        auto buf = std::filesystem::path(std::move(input));
        buf.replace_extension(".html");
        return buf;
    }

    bool init_paths(const std::string &input_file_path, const std::string &output_file_path, bool force) {
        auto in = path(input_file_path);
        auto out = output_file_path.empty() ? generate_path2out(in) : path(output_file_path);

        if (!std::filesystem::is_regular_file(in)) {
            std::wcerr << L"Ошибка, путь " << in << L" не указывает на файл" << std::endl;
            return false;
        }
        if (std::filesystem::exists(out) && !std::filesystem::is_regular_file(out)) {
            std::wcerr << L"Ошибка, путь " << out << L" не указывает на файл" << std::endl;
            return false;
        }

        if (!std::filesystem::exists(in)) {
            std::wcerr << L"Ошибка, файл " << in << L" не существует" << std::endl;
            return false;
        }

        if (std::filesystem::exists(out) && !force) {
            std::wcerr << L"Ошибка, файл " << in << L" уже существует." << std::endl <<
                       L"Запустите программу с флагом -f, чтобы перезаписать выходной файл" << std::endl;
            return false;
        }
        {
            std::ofstream file(in, std::ios::app);
            if (file.is_open()) {
                file.close();
            } else {
                std::wcerr << L"Ошибка, невозможно открыть файл " << in << L" для записи" << std::endl;
                return false;
            }
        }

        {
            std::ifstream file(in);
            if (file.is_open()) {
                file.close();
            } else {
                std::wcerr << L"Ошибка, невозможно открыть файл " << in << L" для чтения" << std::endl;
                return false;
            }
        }

        input_path = in;
        output_path = out;
        is_inited = true;

        return true;
    }
}